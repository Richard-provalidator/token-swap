import { Box, Button, Flex } from "@chakra-ui/react";
import { MenuContent, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import MenuButton from "./MenuButton";
import MetaMaskButton from "./MetaMaskButton";

function Header() {
  return (
    <Box as="header" bgColor="green.50" py={4}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW={1024}
        mx="auto"
      >
        <Box fontSize="2xl" fontWeight="semibold" color="gray.700">
          BCSwap
        </Box>

        <MenuRoot>
          <MenuTrigger asChild>
            <Button colorPalette="green" variant="ghost" size="sm">
              Menu
            </Button>
          </MenuTrigger>

          <MenuContent bgColor="green.500">
            <MenuButton value="💰 Swap Token" href="/" />
            <MenuButton value="🏛️ Liquidity Pool" href="/liquidity" />
            <MetaMaskButton />
          </MenuContent>
        </MenuRoot>
      </Flex>
    </Box>
  );
}

export default Header;
