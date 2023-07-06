import { useState } from 'react';
import { Button, DropdownItemProps, Select } from 'semantic-ui-react';
import { getSocketUrl } from '../types/io-client';
import { BirhDate } from '../types/tarot-card';
import astrology  from '@astrodraw/astrochart';
import Chart from '@astrodraw/astrochart';
import { AstroData, Points } from '@astrodraw/astrochart/dist/project/src/radix';
import { All, BirthChart, House } from '../types/birth-chart';

const dateNumbers = (start : number, end : number) => {
    
    let values : DropdownItemProps[] = []
    for (let i = start; i <= end; i++) {
        
        let str = i.toString();
        
        if(i < 10)
        {
            str = i.toString().padStart(2, '0')
        }
        
        values.push({ key: i, value: str, text: str })
    }
    return values;
}


const BirthDate = () => {

    const [birthDateState, setBirthDate] = useState<BirhDate>({
        year : new Date().getFullYear().toString(),
        month : "03",
        day : new Date().getDate().toString(),
        hour : new Date().getHours().toString(),
        minutes : new Date().getHours().toString()
    });

    const onChangeBirth = (event : any, data : any) => {
        
        setBirthDate({
            ...birthDateState,
            [data.name] : data.value
        });
    };

    const callBirthData = () => {

        //YYYY-MM-DDTHH:mm:ss
        let strDate = birthDateState.year + "-" + birthDateState.month + "-" + birthDateState.day + "T" + birthDateState.hour + ":" + birthDateState.minutes + "Z";
        console.log("strDate", strDate)
        //console.log("new Date(strDate)", new Date(strDate).getTimezoneOffset() *60 * 1000)
        const dt = new Date(strDate);
        console.log("toISOString", dt.toISOString())
        console.log("unixtimestamp", dt.getTime())
        
        const url = getSocketUrl() + "astro?T=" + dt.getTime();
        

        fetch(url)
        .then(res => res.json())
        .then((data : any) => {

            console.log("data.birthChart._houses", data.birthChart._houses)

            const birhChartData : BirthChart = data.birthChart;

            let cuspsArray : number[] = [];
            let manyPoints : Points = {}

            {birhChartData && birhChartData._houses.map((item : House, key : number) =>    
                    
                cuspsArray.push(Number(item.ChartPosition.StartPosition.Ecliptic.DecimalDegrees))

            )}

            {birhChartData && birhChartData._celestialBodies.all.map((item : All, key : any) =>    
                    
                {
                    console.log("celestialBodies.all", item.House.ChartPosition.StartPosition.Ecliptic.DecimalDegrees)
                    console.log("celestialBodies.key", item.key)

                    const planetName = item.key.slice(0, 1).toUpperCase() + item.key.slice(1)

                    manyPoints[planetName] = [item.House.ChartPosition.StartPosition.Ecliptic.DecimalDegrees]
                }
            )}

            console.log("manyPoints", manyPoints)
            
            //const test : Points = new Points();
            

            //cuspsArray = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
            
            //manyPoints= {"Moon":[0], "Sun":[30], "Mercury":[60]};

            let astroData : AstroData = { cusps : cuspsArray, planets : manyPoints };
            
            console.log("astroData", astroData)
            
            let chart : astrology = new Chart('paper', 600, 600, {DEBUG:true});

            chart.radix(astroData).aspects().drawRuler();
            
            
            console.log(data)
        });

    }

    return (
        <div>            
            
            <div id="paper"></div>
            
            <Select name="day" onChange={onChangeBirth} value={birthDateState.day} placeholder='Día' options={dateNumbers(1, 31)}>    
            </Select>

            <Select name="month" onChange={onChangeBirth} value={birthDateState.month} placeholder='Mes' options={dateNumbers(1, 12)}>    
            </Select>
            
            <Select name="year" onChange={onChangeBirth} value={birthDateState.year} placeholder='Año' options={dateNumbers(1929, (new Date()).getFullYear())}>
            </Select>

            <Select name="hour" onChange={onChangeBirth} value={birthDateState.hour} placeholder='Hora' options={dateNumbers(0, 23)}>    
            </Select>
            
            <Select name="minutes" onChange={onChangeBirth} value={birthDateState.minutes} placeholder='Minutos' options={dateNumbers(0, 59)}>    
            </Select>

            <Button onClick={callBirthData}>Genera</Button>
            <hr />
            {birthDateState.day}.
            {birthDateState.month}.
            {birthDateState.year} 
            {birthDateState.hour}:
            {birthDateState.minutes}

        </div>
    )
}

export {BirthDate};
