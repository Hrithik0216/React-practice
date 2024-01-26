import React, { useEffect, useState } from "react";
import { Cloud } from "../../components/Cloud";
import { DarkCloud } from "../../components/DarkCloud";
import { Rain } from "../../components/Rain";
import { Storm } from "../../components/Storm";
import { Sun } from "../../components/Sun";
import { Lightning } from "../../icons/Lightning";
import { Lightning1 } from "../../icons/Lightning1";
import { Lightning2 } from "../../icons/Lightning2";
import "./style.css";

export const Desktop = () => {

  const apiKey = "9aba50960970472cff7454f25e6cecac"
  const [cityName, setCityName] = useState("")
  const [weatherData, setWeatherData] = useState()
  useEffect(()=>{
    Search(cityName, setWeatherData)
  },[])

 
  const handleInput = (e) =>{
    setCityName(e.target.value)
  }
  const Search  = async (cityName, setWeatherData)=>{
    try{
    if(!cityName){
      return
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=${apiKey}`
    const data = await fetch(url)
    const res = await data.json()

    setWeatherData(res)

    
    }catch(e){
      console.log("Error has occured: ",e)
    }
  }

  return (
    <div className="desktop">
      <div className="div-2">
        <div className="overlap">
          <div className="overlap-2">
            <div className="rectangle-9" />
            <div className="overlap-group-wrapper">
              <div className="overlap-group-3">
                <Cloud
                  className="cloud-instance"
                  union="https://c.animaapp.com/y9AIuLJz/img/union-20.svg"
                  unionClassName="design-component-instance-node"
                />
                <Cloud
                  className="cloud-2"
                  union="https://c.animaapp.com/y9AIuLJz/img/union-19.svg"
                  unionClassName="cloud-3"
                />
              </div>
            </div>
            <div className="text-wrapper">{weatherData?.main?.temp_max}°C</div>
            <div className="text-wrapper-2">{weatherData?.name}</div>
            <div className="humidity">HUMIDITY</div>?
            <div className="visiblity">VISIBLITY</div>
            <div className="air-pressure">AIR PRESSURE</div>
            <div className="wind">WIND</div>
            <div className="text-wrapper-3">99%</div>
            <div className="text-wrapper-4">{weatherData?.wind?.speed}km</div>
            <div className="text-wrapper-5">{weatherData?.main?.pressure}hPa</div>
            <div className="text-wrapper-6">{weatherData?.main?.humidity}mph</div>
            <img
              className="icon-location"
              alt="Icon location"
              src="https://c.animaapp.com/y9AIuLJz/img/---icon--location-@2x.png"
            />
            <div className="rectangle-10" />
            <div className="aug-tue">Aug 23,&nbsp;&nbsp;Tue</div>
            <img
              className="icon-temperature"
              alt="Icon temperature"
              src="https://c.animaapp.com/y9AIuLJz/img/---icon--temperature-@2x.png"
            />
          </div>
          <img
            className="icon-chevron-left"
            alt="Icon chevron left"
            src="https://c.animaapp.com/y9AIuLJz/img/---icon--chevron-left-arrow-@2x.png"
          />
        </div>
        <div className="overlap-3">
          <div className="overlap-4">
            <div className="overlap-5">
              <div className="group-wrapper">
                <div className="overlap-wrapper">
                  <div className="overlap-6">
                    <Sun
                      className="sun-instance"
                      ellipse="https://c.animaapp.com/y9AIuLJz/img/ellipse-4-1.svg"
                      ellipseClassName="sun-3"
                      overlapGroupClassName="sun-2"
                      union="https://c.animaapp.com/y9AIuLJz/img/union-18.svg"
                      unionClassName="sun-4"
                    />
                    <Cloud
                      className="cloud-4"
                      union="https://c.animaapp.com/y9AIuLJz/img/union-17.svg"
                      unionClassName="cloud-5"
                    />
                  </div>
                </div>
              </div>
              <div className="text-wrapper-7">WeatherMe</div>
              <p className="today">
                <span className="span">Today</span>
                <span className="text-wrapper-8">&nbsp;</span>
              </p>
              <div className="text-wrapper-9">Tommorow</div>
              <div className="text-wrapper-10">Monthly Forecast</div>
              <img
                className="line"
                alt="Line"
                src="https://c.animaapp.com/y9AIuLJz/img/line-1.svg"
              />
              <div className="text-wrapper-11">21:00 pm</div>
            </div>
            <div className="text-wrapper-12">°C</div>
            <div className="text-wrapper-13">°F</div>
          </div>
          <div className="ellipse-wrapper">
            <div className="ellipse-2" />
          </div>
        </div>

         {/* Search */}
        <div className="overlap-7">
          <img
            className="icon-search"
            alt="Icon search"
            src="https://c.animaapp.com/y9AIuLJz/img/---icon--search-@2x.png"
            onClick={Search(cityName,setWeatherData)}
          />
          <input type="text" className="text-wrapper-14" onChange={handleInput} value={cityName}/>
        </div>
        {/*  */}

        <div className="rectangle-11" />
        <img
          className="icon-chevron-left-2"
          alt="Icon chevron left"
          src="https://c.animaapp.com/y9AIuLJz/img/---icon--chevron-left-arrow--1@2x.png"
        />
        <div className="overlap-8">
          <div className="rectangle-12" />
          <div className="rectangle-13" />
          <div className="div-wrapper">
            <div className="overlap-9">
              <Rain
                className="rain-instance"
                divClassName="rain-5"
                divClassNameOverride="rain-6"
                groupClassName="rain-2"
                groupClassNameOverride="rain-7"
                rectangleClassName="rain-3"
                rectangleClassName1="rain-3"
                rectangleClassName2="rain-4"
                rectangleClassName3="rain-5"
                rectangleClassName4="rain-6"
                rectangleClassNameOverride="rain-4"
              />
              <DarkCloud
                className="dark-cloud-instance"
                union="https://c.animaapp.com/y9AIuLJz/img/union-10.svg"
                unionClassName="dark-cloud-2"
              />
            </div>
          </div>
          <div className="text-wrapper-15">19:00 pm</div>
          <div className="text-wrapper-16">29°</div>
        </div>
        <div className="overlap-10">
          <div className="rectangle-14" />
          <div className="rectangle-15" />
          <div className="text-wrapper-17">7:00am</div>
          <div className="text-wrapper-18">27°</div>
          <div className="group-5">
            <div className="overlap-11">
              <div className="group-6">
                <div className="snow">
                  <img
                    className="union-3"
                    alt="Union"
                    src="https://c.animaapp.com/y9AIuLJz/img/union-5.svg"
                  />
                </div>
                <div className="union-wrapper">
                  <img
                    className="union-4"
                    alt="Union"
                    src="https://c.animaapp.com/y9AIuLJz/img/union-4.svg"
                  />
                </div>
                <div className="img-wrapper">
                  <img
                    className="union-5"
                    alt="Union"
                    src="https://c.animaapp.com/y9AIuLJz/img/union-3.svg"
                  />
                </div>
              </div>
              <Cloud
                className="cloud-6"
                union="https://c.animaapp.com/y9AIuLJz/img/union-2.svg"
                unionClassName="cloud-7"
              />
            </div>
          </div>
        </div>
        <div className="overlap-12">
          <div className="rectangle-14" />
          <div className="rectangle-16" />
          <div className="group-7">
            <div className="group-8">
              <div className="overlap-13">
                <Sun
                  className="sun-5"
                  ellipse="https://c.animaapp.com/y9AIuLJz/img/ellipse-4.svg"
                  ellipseClassName="sun-7"
                  overlapGroupClassName="sun-6"
                  union="https://c.animaapp.com/y9AIuLJz/img/union-14.svg"
                  unionClassName="sun-8"
                />
                <Cloud
                  className="cloud-8"
                  union="https://c.animaapp.com/y9AIuLJz/img/union-13.svg"
                  unionClassName="cloud-9"
                />
              </div>
            </div>
          </div>
          <div className="text-wrapper-17">5:00am</div>
          <div className="text-wrapper-19">31°</div>
        </div>
        <div className="overlap-14">
          <div className="rectangle-14" />
          <div className="rectangle-15" />
          <div className="text-wrapper-20">3:00am</div>
          <div className="text-wrapper-21">29°</div>
          <div className="group-9">
            <div className="overlap-9">
              <Storm
                className="storm-instance"
                divClassName="storm-6"
                divClassNameOverride="storm-7"
                groupClassName="storm-3"
                groupClassNameOverride="storm-8"
                icon={<Lightning className="icon-instance-node" />}
                overlapGroupClassName="storm-2"
                rectangleClassName="storm-4"
                rectangleClassName1="storm-5"
                rectangleClassName2="storm-4"
                rectangleClassName3="storm-7"
                rectangleClassName4="storm-6"
                rectangleClassNameOverride="storm-5"
              />
              <div className="group-10">
                <div className="overlap-15">
                  <DarkCloud
                    className="dark-cloud-3"
                    union="https://c.animaapp.com/y9AIuLJz/img/union-7.svg"
                    unionClassName="dark-cloud-4"
                  />
                  <img
                    className="union-6"
                    alt="Union"
                    src="https://c.animaapp.com/y9AIuLJz/img/union-6.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-16">
          <div className="rectangle-14" />
          <div className="rectangle-16" />
          <div className="text-wrapper-22">1:00am</div>
          <div className="text-wrapper-23">26°</div>
          <div className="group-11">
            <div className="overlap-9">
              <Storm
                className="storm-instance"
                divClassName="storm-6"
                divClassNameOverride="storm-7"
                groupClassName="storm-3"
                groupClassNameOverride="storm-8"
                icon={<Lightning1 className="icon-instance-node" />}
                overlapGroupClassName="storm-2"
                rectangleClassName="storm-4"
                rectangleClassName1="storm-5"
                rectangleClassName2="storm-4"
                rectangleClassName3="storm-7"
                rectangleClassName4="storm-6"
                rectangleClassNameOverride="storm-5"
              />
              <div className="group-10">
                <div className="overlap-15">
                  <DarkCloud
                    className="dark-cloud-3"
                    union="https://c.animaapp.com/y9AIuLJz/img/union-9.svg"
                    unionClassName="dark-cloud-4"
                  />
                  <img
                    className="union-6"
                    alt="Union"
                    src="https://c.animaapp.com/y9AIuLJz/img/union-8.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-17">
          <div className="rectangle-14" />
          <div className="rectangle-16" />
          <div className="group-12">
            <div className="overlap-18">
              <Lightning2 className="lightning-2" />
              <div className="group-13">
                <div className="overlap-group-4">
                  <DarkCloud
                    className="dark-cloud-5"
                    union="https://c.animaapp.com/y9AIuLJz/img/union-16.svg"
                    unionClassName="dark-cloud-6"
                  />
                  <img
                    className="union-7"
                    alt="Union"
                    src="https://c.animaapp.com/y9AIuLJz/img/union-15.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-24">23:00pm</div>
          <div className="text-wrapper-25">27°</div>
        </div>
        <div className="overlap-19">
          <div className="rectangle-17" />
          <div className="rectangle-16" />
          <div className="group-14">
            <div className="group-15">
              <div className="overlap-group-5">
                <Cloud
                  className="cloud-10"
                  union="https://c.animaapp.com/y9AIuLJz/img/union-12.svg"
                  unionClassName="cloud-11"
                />
                <Cloud
                  className="cloud-12"
                  union="https://c.animaapp.com/y9AIuLJz/img/union-11.svg"
                  unionClassName="cloud-13"
                />
              </div>
            </div>
          </div>
          <div className="text-wrapper-17">21:00 pm</div>
          <div className="text-wrapper-19">27°</div>
        </div>
      </div>
    </div>
  );
};
