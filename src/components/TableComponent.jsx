import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { FaCircle, FaEye, FaLink, FaTrash, FaUpload } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function TableComponent({
  headerList,
  data,
  rowList,
  loading,
  optionsList,
}) {
  const Rows = data.map((obj, index) => {
    const rowCells = rowList.map((key) => <Td key={key}>{obj[key]}</Td>);
    const options = (
      <Td>
        <Menu>
          <MenuButton as={IconButton} icon={<Icon as={HamburgerIcon} />} />
          <MenuList>
            {optionsList.map((option) => (
              <MenuItem key={option.label} onClick={() => option.onClick(obj)}>
                {option.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Td>
    );
    return <Tr key={index}>{[...rowCells, options]}</Tr>;
  });

  const Header_Row =
    headerList &&
    headerList.map((item, index) => (
      <Th bgColor={"black"} color={"white"} key={index}>
        {item}
      </Th>
    ));

  if (loading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  return (
    <Table variant={"striped"}>
      <Thead>
        <Tr>{Header_Row}</Tr>
      </Thead>
      <Tbody>{Rows}</Tbody>
    </Table>
  );
}
