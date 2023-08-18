import React from "react";
import filter from "../assets/filter.svg";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

const Filterpanel = (props) => {
  const theme = createTheme();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filtercategories = () => {
    return props.categories.filter((category) => {
      return category.category === props.categories.type;
    });
  };
  

  return (
    <div className="hidden md:block">
      <div className="flex gap-x-3 items-center">
        <img src={filter} className="w-[20px]" alt="" />
        <p className="text-xl font-medium">Filter</p>
      </div>
      <hr className="h-[2px] bg-[#AFB091] w-[244px] rounded-[10px]" />
      <div className="flex flex-col gap-y-[50px]">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem className="border-none">
            <h2>
              <AccordionButton className="bg-none">
                <Box
                  className="text-lg font-medium"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  By category
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className="flex flex-col" pb={4}>
              <Checkbox className="text-[#292929] text-2xl leading-8">
                Editorials
              </Checkbox>
              <Checkbox className="text-[#292929] text-2xl leading-8">
                Fashion
              </Checkbox>
              <Checkbox className="text-[#292929] text-2xl leading-8">
                Optics
              </Checkbox>
              <Checkbox className="text-[#292929] text-2xl leading-8">
                Art & Museum
              </Checkbox>
              <Checkbox className="text-[#292929] text-2xl leading-8">
                Nature
              </Checkbox>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem className="border-none">
            <h2>
              <AccordionButton className="bg-none">
                <Box
                  className="text-lg font-medium"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  By artist
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className="flex flex-col" pb={4}>
              <Checkbox className="text-[#292929] text-2xl leading-8">
                All
              </Checkbox>
              <Checkbox className="text-[#292929] text-2xl leading-8">
                Below $100.00
              </Checkbox>
              <Checkbox className="text-[#292929] text-2xl leading-8">
                $100.00 - $150.00
              </Checkbox>
              <Checkbox className="text-[#292929] text-2xl leading-8">
                $150.00 - $200.00
              </Checkbox>
              <Checkbox className="text-[#292929] text-2xl leading-8">
                Above $200.00
              </Checkbox>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion className="w-[244px]" defaultIndex={[0]} allowMultiple>
          <AccordionItem className="border-none">
            <h2>
              <AccordionButton className="bg-none">
                <Box
                  className="text-lg font-medium"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  By artist
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className="flex flex-col" pb={4}>
              <Box className="text-lg leading-[32px]">
                <ThemeProvider theme={theme}>
                  $100.00 - $150.00
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </ThemeProvider>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Filterpanel;
