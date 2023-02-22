import { Table, Thead, Tbody, Tr, Th, Td, Spinner } from "@chakra-ui/react";

export default function TableComponent({
  headerList,
  data,
  rowList,
  loading,
  isOption,
}) {
  const filteredList = data.map((obj) =>
    rowList.reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {})
  );
  //   console.log("data", data);
  //   console.log("lista filtradas", filteredList);
  const Rows = filteredList.map((obj, index) => {
    const rowCells = rowList.map((key) => <Td key={key}>{obj[key]}</Td>);
    return <Tr key={index}>{rowCells}</Tr>;
  });

  if (loading) {
    return <Spinner size="lg" color="#fff" />;
  }

  return (
    <Table variant={"striped"}>
      <Thead>
        <Tr>
          {headerList &&
            headerList.map((item, index) => {
              return (
                <Th bgColor={"white"} color={"black"} key={index}>
                  {item}
                </Th>
              );
            })}
        </Tr>
      </Thead>
      <Tbody>{Rows}</Tbody>
    </Table>
  );
}
