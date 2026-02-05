import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="l" style={{ minHeight: '70vh' }} paddingTop="80">
        <Row fillWidth horizontal="center" gap="xl" align="center" s={{ direction: 'column' }}>
          <Column maxWidth="s" gap="l" flex={1} align="start">
            <RevealFx translateY="4" fillWidth>
              <Heading wrap="balance" variant="display-strong-xl">
                {home.headline}
              </Heading>
            </RevealFx>
            <RevealFx translateY="8" delay={0.2} fillWidth paddingBottom="16">
              <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l">
                {home.subline}
              </Text>
            </RevealFx>
            <RevealFx delay={0.4}>
              <Row gap="12">
                <Button
                  id="github"
                  data-border="rounded"
                  href="https://github.com/asinugit"
                  variant="primary"
                  size="l"
                  weight="default"
                  prefixIcon="github"
                >
                  GitHub
                </Button>

                <Button
                  id="hire"
                  data-border="rounded"
                  href={`mailto:${person.email}`}
                  variant="secondary"
                  size="l"
                  weight="default"
                  prefixIcon="email"
                >
                  Hire Me
                </Button>
              </Row>
            </RevealFx>
          </Column>
          <Column flex={1} horizontal="center" align="center">
            <RevealFx delay={0.3}>
              <Avatar
                src={person.avatar}
                size="xl"
                style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            </RevealFx>
          </Column>
        </Row>
      </Column>
      <Column fillWidth horizontal="center" align="center" paddingTop="80" paddingBottom="40">
        <RevealFx delay={0.8}>
          <Button
            id="scroll-about"
            href={about.path}
            variant="tertiary"
            size="m"
            weight="default"
            arrowIcon
            style={{
              animation: 'bounce 2s infinite'
            }}
          >
            Learn More About Me
          </Button>
        </RevealFx>
      </Column>
    </Column>
  );
}
