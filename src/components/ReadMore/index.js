import React, { useState, useEffect } from "react";

import Box from "../../components/Box";
import Flex from "../../components/Flex";

const ReadMore = ({ children }) => {
  const [fullTextVisible, setFullTextVisible] = useState(false);

  const getShowingText = text => {
    const newText = text;
    if (newText.length < 200) {
      return `${newText}...`;
    } else {
      return `${text.slice(0, 200)}...`;
    }
  };

  return (
    <Box>
      <Flex>
        <p>
          {fullTextVisible ? `${children}...` : getShowingText(children)}
          <span onClick={() => setFullTextVisible(!fullTextVisible)}>
            {fullTextVisible ? "Fechar" : "Leia Mais"}
          </span>
        </p>
      </Flex>
    </Box>
  );
};

export default ReadMore;
