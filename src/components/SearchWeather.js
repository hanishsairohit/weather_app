import { Button, TableCell } from "@mui/material";
import { useState, useEffect } from "react";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import { maxHeight } from "@mui/system";
import { TableBody, TableHead, TableRow, Table } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Container } from "@mui/material";
import Paper from "material-ui/Paper";
import List from "material-ui/List";
import { TableContainer } from "@mui/material";
import { Helmet } from "react-helmet";

const axios = require("axios");

const SearchWeather = (props) => {
  const [location, setLocation] = useState("");
  const [cityList, setCityList] = useState([]);
  const [currentInfo, setCurrentInfo] = useState(undefined);

  const getCityWeather = async (city_name) => {
    const { data } = await axios.get(
      "https://api.weatherapi.com/v1/forecast.json?key=719118a20e3848eeb40141335212111&q=" +
        city_name +
        "&days=3&aqi=no&alerts=no/"
    );

    let hoursData = [];

    for (let day of data.forecast.forecastday) {
      hoursData = hoursData.concat(day.hour);
    }

    const newHoursData = [];

    data.current.time = "Now";

    newHoursData.push(data.current);
    let count = 0;

    for (let hour of hoursData) {
      if (count > 10) {
        break;
      }

      if (data.current.last_updated_epoch > hour.time_epoch) {
        continue;
      }

      hour.time = parseInt(hour.time.split(" ")[1].split(":")[0]);

      const daytag = hour.time > 11 ? "PM" : "AM";

      hour.time = hour.time % 12;

      hour.time = hour.time == 0 ? hour.time + 12 : hour.time;

      hour.time = hour.time.toString() + daytag;
      newHoursData.push(hour);
      count = count + 1;
    }

    hoursData = newHoursData;

    const currentComponent = (
      <div className="currentWeather">
        <Helmet>
          <script>
            {
              "document.body.style.backgroundImage=`url('https://wallpaperaccess.com/full/1996509.jpg')`; "
            }
          </script>
        </Helmet>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            opacity: 0.75,
            alignItems: "center",
          }}
        >
          <Card style={{ maxWidth: 440, maxHeight: 1200 }}>
            <Typography gutterBottom variant="h5" component="div">
              {data.location.name}
            </Typography>
            <Table>
              <TableHead>
                <TableRow class="heading">
                  <TableCell key="1">
                    {" "}
                    <span>
                      <CardMedia
                        component="img"
                        height="64"
                        weight="64"
                        image={data.current.condition.icon}
                        alt="weather icon"
                      />
                    </span>
                    <span>{data.current.condition.text}</span>
                    <br />
                    <span>{data.current.is_day == 1 ? "Day" : "Night"}</span>
                  </TableCell>
                  <TableCell>
                    <span class="fahrenheit">{data.current.temp_f} F</span>
                    <br />
                    <span> Feels Like {data.current.feelslike_f} F</span>
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <Table>
                  <TableHead>
                    <TableRow class="heading">
                      <TableCell>Wind</TableCell>
                      <TableCell>Humidity</TableCell>
                      <TableCell>Visibility</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow class="body">
                      <TableCell>{data.current.wind_mph} m/h</TableCell>
                      <TableCell>{data.current.humidity} %</TableCell>
                      <TableCell>{data.current.vis_miles} miles</TableCell>
                    </TableRow>
                    <TableRow class="heading">
                      <TableCell></TableCell>
                      <TableCell>Low</TableCell>
                      <TableCell>High</TableCell>
                    </TableRow>
                    <TableRow>
                      {" "}
                      <TableCell>Today</TableCell>
                      <TableCell>
                        {data.forecast.forecastday[0].day.mintemp_f + " F"}
                      </TableCell>
                      <TableCell>
                        {data.forecast.forecastday[0].day.maxtemp_f + " F"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Tomorrow</TableCell>
                      <TableCell>
                        {data.forecast.forecastday[1].day.mintemp_f + " F"}
                      </TableCell>
                      <TableCell>
                        {data.forecast.forecastday[1].day.maxtemp_f + " F"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      {" "}
                      <TableCell>Day After Tomorrow</TableCell>
                      <TableCell>
                        {data.forecast.forecastday[2].day.mintemp_f + " F"}
                      </TableCell>
                      <TableCell>
                        {data.forecast.forecastday[2].day.maxtemp_f + " F"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Typography>
            </CardContent>
            <TableContainer style={{ maxHeight: 150 }}>
              <Table stickyHeader>
                <TableRow>
                  {hoursData.map((hour, idx) => {
                    return (
                      <TableCell>
                        <span>{hour.time}</span>
                        <span>
                          <CardMedia
                            component="img"
                            height="60"
                            weight="60"
                            image={hour.condition.icon}
                            alt="green iguana"
                          />
                        </span>
                        <span>{hour.temp_f}F </span>
                      </TableCell>
                    );
                  })}
                </TableRow>
              </Table>
            </TableContainer>
          </Card>
        </Container>
      </div>
    );

    setCurrentInfo(currentComponent);
  };

  useEffect(() => {
    async function getData() {
      if (location === "") {
        return;
      }

      console.log(location);
      const { data } = await axios.get(
        "https://api.weatherapi.com/v1/search.json?key=719118a20e3848eeb40141335212111&q=" +
          location +
          "/"
      );
      setCityList(data);
    }
    getData();
  }, [location]);

  return (
    <div class="MainComponent">
      <div class="searchComponent" style={{ opacity: 0.75 }}>
        <input
          className="form-control"
          name="city"
          id="city"
          type="city"
          height="100"
          onInput={(e) => {
            setLocation(e.target.value);
          }}
          onChange={() => {
            setCurrentInfo("");
          }}
          placeholder="Enter a minimum of three characters to search cities"
          value={location}
          required
        />
        <br />
        {cityList &&
          cityList.map((cityName) => {
            return (
              <div key={cityName.name}>
                <br />
                <Button
                  onClick={(e) => {
                    getCityWeather(cityName.name);
                    setCityList([]);
                    setLocation("");
                  }}
                  style={{
                    color: "black",
                    backgroundColor: "#d3d3d3",
                    opacity: 0.9,
                  }}
                >
                  {cityName.name}
                </Button>
              </div>
            );
          })}
        <div id="myDropdown" class="dropdown-content"></div>
      </div>
      <br />
      <br />
      {currentInfo}
    </div>
  );
};

export default SearchWeather;
