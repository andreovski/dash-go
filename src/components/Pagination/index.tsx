import { Button, Stack, Box, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegister: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const sibilingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [new Array(to - from)]
    .map((value, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegister,
  currentPage = 1,
  onPageChange,
  registersPerPage = 10,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegister / registersPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - sibilingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + sibilingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <b>0</b> -{" "}
        <b>{totalCountOfRegister >= 10 ? "10" : totalCountOfRegister}</b> de{" "}
        <b>{totalCountOfRegister}</b>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > 1 + sibilingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + sibilingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                onPageChange={onPageChange}
                number={page}
              />
            );
          })}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                onPageChange={onPageChange}
                number={page}
              />
            );
          })}

        {currentPage + sibilingsCount < lastPage && (
          <>
            {currentPage + 1 + sibilingsCount < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
