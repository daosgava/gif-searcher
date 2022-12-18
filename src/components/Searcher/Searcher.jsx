import { useEffect, useState } from "react";
import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDebounce } from "../../hooks";

const Searcher = ({ searchByKeyword }) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  useEffect(() => {
    searchByKeyword(debouncedValue);
  }, [debouncedValue, searchByKeyword]);

  return (
    <InputGroup maxW="800px">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input placeholder="Type a keyword" onChange={handleOnChange} />
    </InputGroup>
  );
};

export default Searcher;
