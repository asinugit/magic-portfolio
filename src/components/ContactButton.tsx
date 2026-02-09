"use client";

import React from "react";
import { Button, Column, Row, Text } from "@once-ui-system/core";
import { person } from "@/resources";

export const ContactButton = () => {
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  return (
    <Column style={{ position: "relative" }}>
      <Button
        id="contact"
        data-border="rounded"
        onClick={() => setIsContactOpen(!isContactOpen)}
        variant="secondary"
        size="l"
        weight="default"
        prefixIcon="phone"
      >
        Contact Me
      </Button>
      {isContactOpen && (
        <Column
          background="neutral-alpha-medium"
          border="neutral-medium"
          radius="m"
          padding="m"
          gap="8"
          style={{ position: "absolute", top: "100%", right: 0, marginTop: "8px", zIndex: 10 }}
        >
          <Row gap="8" vertical="center">
            <span>📧</span>
            <Text variant="body-default-s">{person.email}</Text>
          </Row>
        </Column>
      )}
    </Column>
  );
};
