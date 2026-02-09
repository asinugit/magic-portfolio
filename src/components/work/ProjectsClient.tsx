"use client";

import { useState } from "react";
import { Column, Row, Button, Text, Heading } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type ProjectMetadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
  category?: string;
};

type Project = {
  metadata: ProjectMetadata;
  slug: string;
  content: string;
};

interface ProjectsClientProps {
  projects: Project[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const [filter, setFilter] = useState<string>("all");

  // Define fixed categories
  const categories = [
    { id: "all", label: "All" },
    { id: "web development", label: "Web Development" },
    { id: "mobile apps", label: "Mobile Apps" },
    { id: "design", label: "Design" },
  ];
  
  // Get category counts
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return projects.length;
    return projects.filter(p => p.metadata.category === categoryId).length;
  };

  // Filter projects based on selected category
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.metadata.category === filter);

  return (
    <>
      <Row horizontal="center" wrap gap="12" marginBottom="l">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={filter === category.id ? "primary" : "secondary"}
            size="m"
            onClick={() => setFilter(category.id)}
          >
            {category.label} ({getCategoryCount(category.id)})
          </Button>
        ))}
      </Row>
      
      
      <Row fillWidth wrap gap="l" marginBottom="40" paddingX="l" horizontal="center">
        {filteredProjects.length === 0 ? (
          <Column fillWidth horizontal="center" paddingY="xl" gap="m">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2z"/>
            </svg>
            <Column horizontal="center" gap="4">
              <Text variant="heading-strong-m">No projects found</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">Try selecting a different category</Text>
            </Column>
          </Column>
        ) : (
          filteredProjects.map((post, index) => (
            <Column key={post.slug} maxWidth="320" minWidth="280">
              <ProjectCard
                priority={index < 2}
                href={`/work/${post.slug}`}
                images={post.metadata.images}
                title={post.metadata.title}
                description={post.metadata.summary}
                content={post.content}
                avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
                link={post.metadata.link || ""}
                category={post.metadata.category}
              />
            </Column>
          ))
        )}
      </Row>
    </>
  );
}
