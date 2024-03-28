import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useBranches, { Branch } from "../hooks/useBranches";
import getCroppedImageUrl from "../services/image-url";
//import branches from "../data/branches";

interface Props {
  onSelectBranch: (branch: Branch) => void;
  selectedBranch: Branch | null;
}

const BranchList = ({ selectedBranch, onSelectBranch }: Props) => {
  const { data, isLoading, error } = useBranches();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Branches
      </Heading>
      <List>
        {data.map((branch) => (
          <ListItem key={branch.Mbri_Id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(branch.image_branch)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  branch.Mbri_Id === selectedBranch?.Mbri_Id ? "bold" : "normal"
                }
                onClick={() => onSelectBranch(branch)}
                fontSize="md"
                variant="link"
              >
                {branch.Mbri_Name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default BranchList;
