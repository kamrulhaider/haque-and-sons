"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects as allProjects, placeholderImages, projectTypes } from '@/lib/data';
import type { Project } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.type === activeFilter));
    }
  }, [activeFilter]);

  return (
    <>
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Our Projects</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-primary-foreground/80">
            Explore a selection of our finest work, demonstrating our expertise across diverse sectors and building types.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12 flex-wrap gap-2">
            {projectTypes.map(type => (
              <Button
                key={type}
                variant={activeFilter === type ? 'default' : 'outline'}
                onClick={() => setActiveFilter(type)}
                className={cn(
                  activeFilter === type && 'bg-accent text-accent-foreground hover:bg-accent/90 border-accent'
                )}
              >
                {type}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => {
              const image = placeholderImages.find(p => p.id === project.imageId);
              return (
                <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {image && (
                    <div className="overflow-hidden aspect-w-3 aspect-h-2">
                      <Image
                        src={image.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <p className="text-sm font-medium text-accent">{project.type}</p>
                    <h3 className="text-xl font-semibold my-2 text-primary">{project.title}</h3>
                    <p className="text-muted-foreground mb-2 text-sm">{project.location}</p>
                    <p className="text-muted-foreground line-clamp-3">{project.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
             <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No projects found for this category.</p>
             </div>
          )}
        </div>
      </section>
    </>
  );
}
