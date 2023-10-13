'use client'
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Flag from 'react-world-flags'
import { useState, useEffect } from 'react';
import { Box, TextInput, Center, Alert, Title } from '@mantine/core';
import { Button } from '@mantine/core';
import { Text } from '@mantine/core';
import { IconInfoCircle }  from '@tabler/icons-react';
import { COUNTRY_DATA } from './components/country_data';


const COUNTRY_CODES = [
  "004",
  "008",
  "010",
  "012",
  "016",
  "020",
  "024",
  "028",
  "031",
  "032",
  "036",
  "040",
  "044",
  "048",
  "050",
  "051",
  "052",
  "056",
  "060",
  "064",
  "068",
  "070",
  "072",
  "074",
  "076",
  "084",
  "086",
  "090",
  "092",
  "096",
  "100",
  "104",
  "108",
  "112",
  "116",
  "120",
  "124",
  "132",
  "136",
  "140",
  "144",
  "148",
  "152",
  "156",
  "158",
  "162",
  "166",
  "170",
  "174",
  "175",
  "178",
  "180",
  "184",
  "188",
  "191",
  "192",
  "196",
  "203",
  "204",
  "208",
  "212",
  "214",
  "218",
  "222",
  "226",
  "231",
  "232",
  "233",
  "234",
  "238",
  "239",
  "242",
  "246",
  "248",
  "250",
  "254",
  "258",
  "260",
  "262",
  "266",
  "268",
  "270",
  "275",
  "276",
  "288",
  "292",
  "296",
  "300",
  "304",
  "308",
  "312",
  "316",
  "320",
  "324",
  "328",
  "332",
  "334",
  "336",
  "340",
  "344",
  "348",
  "352",
  "356",
  "360",
  "364",
  "368",
  "372",
  "376",
  "380",
  "384",
  "388",
  "392",
  "398",
  "400",
  "404",
  "408",
  "410",
  "414",
  "417",
  "418",
  "422",
  "426",
  "428",
  "430",
  "434",
  "438",
  "440",
  "442",
  "446",
  "450",
  "454",
  "458",
  "462",
  "466",
  "470",
  "474",
  "478",
  "480",
  "484",
  "492",
  "496",
  "498",
  "499",
  "500",
  "504",
  "508",
  "512",
  "516",
  "520",
  "524",
  "528",
  "531",
  "533",
  "534",
  "535",
  "540",
  "548",
  "554",
  "558",
  "562",
  "566",
  "570",
  "574",
  "578",
  "580",
  "581",
  "583",
  "584",
  "585",
  "586",
  "591",
  "598",
  "600",
  "604",
  "608",
  "612",
  "616",
  "620",
  "624",
  "626",
  "630",
  "634",
  "638",
  "642",
  "643",
  "646",
  "652",
  "654",
  "659",
  "660",
  "662",
  "663",
  "666",
  "670",
  "674",
  "678",
  "682",
  "686",
  "688",
  "690",
  "694",
  "702",
  "703",
  "704",
  "705",
  "706",
  "710",
  "716",
  "724",
  "728",
  "729",
  "732",
  "740",
  "744",
  "748",
  "752",
  "756",
  "760",
  "762",
  "764",
  "768",
  "772",
  "776",
  "780",
  "784",
  "788",
  "792",
  "795",
  "796",
  "798",
  "800",
  "804",
  "807",
  "818",
  "826",
  "831",
  "832",
  "833",
  "834",
  "840",  
  "850",
  "854",
  "858",
  "860",
  "862",
  "876",
  "882",
  "887",
  "894",];

  
  
const getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
}

const getRandomCountry = () => {
  
  const country = Math.trunc(getRandomArbitrary(0,COUNTRY_CODES.length-1));
  return COUNTRY_DATA[country];
}

const validateAnswer = (userInput:string, country:any) => {
  if (Number(userInput) == Number(country.numeric))
    return true;
  if (userInput.toLowerCase() == country.name.toLowerCase())
    return true;
  if (userInput.toLowerCase() == country.alpha2.toLowerCase())
    return true;
  if (userInput.toLowerCase() == country.alpha3.toLowerCase())
    return true;
  return false;
}


export default function HomePage() {
  const [country, setCountry] = useState(getRandomCountry());
  const [inputValue, setInputValue] = useState("");
  const [message,setMessage] = useState('');

  const icon = <IconInfoCircle />;

  const delay = (ms:any) => new Promise(res => setTimeout(res, ms));
  
  useEffect( ()=>{ async () => {
    await delay(2000);
    setMessage("");
}}, [inputValue])

  const checkCountry = () => {
    setCountry(getRandomCountry)
    if(validateAnswer(inputValue, country)){
     // alert("Correct");
      setMessage('Correct')
    }
    else{ 
     // alert("Wrong")
      setMessage('Wrong')
    }

    
    setInputValue("");
  }

  const handleMessage = (message : string)=>{
    if(message == 'Correct'){
      return <Alert variant="light" color="green" title="Correct" icon={icon}>
      Way to go!
    </Alert>
    }
    if(message == 'Wrong')
      return <Alert variant="light" color="red" title="Wrong" icon={icon}>
      That's not it...
    </Alert>
    return "";
  }
  return (
    <>
    <Center style={{margin: "40px"}}><Title order={1}>What country is this?</Title></Center>
    <Center style={{margin: "20px"}}>
      <Center maw={400} h={100}>
        <Flag  code={country.numeric} height="150rem" />
      </Center>
      
    </Center>
      <Center><Box>
          <Center maw={400} h={100}>
              <Box>
                <TextInput 
                size="xxl"
                value={inputValue} 
                placeholder={ country.numeric +": " + country.name }
                onChange={ (input) => {
                  setInputValue(input.target.value)
                  setMessage("");
                }}
                onKeyDown={(key) => {
                  if(key.code == 'Enter'){
                    checkCountry();
                  }
                }}
                />
                </Box>
            
            <Button onClick={ () => {
             checkCountry();
            }}>Send</Button>
          </Center>
          <Box>{handleMessage(message)}</Box>
        </Box></Center>
    </>
      
    
    
  );
}
