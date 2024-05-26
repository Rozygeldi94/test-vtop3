import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const footerSocialMediaLogos = [
  { id: 1, src: "social_media/twitter.svg", alt: "twitter logo" },
  { id: 2, src: "social_media/facebook.svg", alt: "facebook logo" },
  { id: 3, src: "social_media/instagram.svg", alt: "instagram logo" },
  { id: 4, src: "social_media/linkedin.svg", alt: "linkedin logo" },
  { id: 5, src: "social_media/you_tube.svg", alt: "youtube logo" },
  { id: 6, src: "social_media/tiktok.svg", alt: "tiktok logo" },
  { id: 7, src: "social_media/telegram.svg", alt: "telegram logo" },
  { id: 8, src: "social_media/vk.svg", alt: "vk logo" },
];

export const SocialMedia = () => {
  return (
    <Box>
      <Text textAlign={{ base: "start", isLargerThan850: "end" }}>
        Our social media:
      </Text>
      <Flex alignItems="center" gap="8px">
        {footerSocialMediaLogos?.map((img) => (
          <Link as={RouterLink} to="#">
            <Image
              key={img?.id}
              src={img?.src}
              alt={img?.alt}
              width={{ base: "27px", md: "32px" }}
              _hover={{ opacity: "0.7", cursor: "pointer" }}
            />
          </Link>
        ))}
      </Flex>
    </Box>
  );
};
