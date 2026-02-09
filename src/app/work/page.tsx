import { Column, Heading, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { getPosts } from "@/utils/utils";
import { ProjectsClient } from "@/components/work/ProjectsClient";

export default function Work() {
  // Fetch projects on server side
  const allProjects = getPosts(["src", "app", "work", "projects"]);
  
  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <ProjectsClient projects={sortedProjects} />
    </Column>
  );
}
