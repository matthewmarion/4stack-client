import {Card, Grid, Col, Title, Subtitle, TextInput, Button, BarChart, DonutChart, AreaChart} from '@tremor/react';


export default function Analytics(props) {
    const playerKills = props.models.games.flatMap(game => game.statLines)
    .reduce((kills, statLine) => {
      const { player, kills: numKills } = statLine;
      const { id, alias } = player;
      kills[id] = {
        id,
        name: alias,
        value: (kills[id]?.value || 0) + numKills
      };
      return kills;
    }, {});

  const dataFormatter = (value: number) => {
    return value.toLocaleString();
  };
    // Convert the player kill data into an array

  const chartData = Object.values(playerKills);


  const mapsPlayed = props.models.games.reduce((mapCounts, game) => {
    const { map } = game;
    const mapName = map.name;
    if (!mapCounts[mapName]) {
      mapCounts[mapName] = {
        name: mapName,
        count: 1,
      };
    } else {
      mapCounts[mapName].count++;
    }
    return mapCounts;
  }, {});

  const mapData = Object.values(mapsPlayed);


  const resultData = [
    {
      date: "Jan 23",
      "Atlanta FaZe": Math.floor(Math.random() * 10),
      "Boston Breach": Math.floor(Math.random() * 10),
      "Florida Mutineers": Math.floor(Math.random() * 10),
      "London Royal Ravens": Math.floor(Math.random() * 10),
      "Los Angeles Guerillas": Math.floor(Math.random() * 10),
      "Los Angeles Thieves": Math.floor(Math.random() * 10),
      "Minnesota ROKKR": Math.floor(Math.random() * 10),
      "New York Subliners": Math.floor(Math.random() * 10),
      "OpTic Texas": Math.floor(Math.random() * 10),
      "Seattle Surge": Math.floor(Math.random() * 10),
      "Toronto Ultra": Math.floor(Math.random() * 10),
      "Vegas Legion": Math.floor(Math.random() * 10),
    },
    {
      date: "Feb 23",
      "Atlanta FaZe": Math.floor(Math.random() * 10),
      "Boston Breach": Math.floor(Math.random() * 10),
      "Florida Mutineers": Math.floor(Math.random() * 10),
      "London Royal Ravens": Math.floor(Math.random() * 10),
      "Los Angeles Guerillas": Math.floor(Math.random() * 10),
      "Los Angeles Thieves": Math.floor(Math.random() * 10),
      "Minnesota ROKKR": Math.floor(Math.random() * 10),
      "New York Subliners": Math.floor(Math.random() * 10),
      "OpTic Texas": Math.floor(Math.random() * 10),
      "Seattle Surge": Math.floor(Math.random() * 10),
      "Toronto Ultra": Math.floor(Math.random() * 10),
      "Vegas Legion": Math.floor(Math.random() * 10),
    },
    {
      date: "Mar 23",
      "Atlanta FaZe": Math.floor(Math.random() * 10),
      "Boston Breach": Math.floor(Math.random() * 10),
      "Florida Mutineers": Math.floor(Math.random() * 10),
      "London Royal Ravens": Math.floor(Math.random() * 10),
      "Los Angeles Guerillas": Math.floor(Math.random() * 10),
      "Los Angeles Thieves": Math.floor(Math.random() * 10),
      "Minnesota ROKKR": Math.floor(Math.random() * 10),
      "New York Subliners": Math.floor(Math.random() * 10),
      "OpTic Texas": Math.floor(Math.random() * 10),
      "Seattle Surge": Math.floor(Math.random() * 10),
      "Toronto Ultra": Math.floor(Math.random() * 10),
      "Vegas Legion": Math.floor(Math.random() * 10),
    },
    {
      date: "Apr 23",
      "Atlanta FaZe": Math.floor(Math.random() * 10),
      "Boston Breach": Math.floor(Math.random() * 10),
      "Florida Mutineers": Math.floor(Math.random() * 10),
      "London Royal Ravens": Math.floor(Math.random() * 10),
      "Los Angeles Guerillas": Math.floor(Math.random() * 10),
      "Los Angeles Thieves": Math.floor(Math.random() * 10),
      "Minnesota ROKKR": Math.floor(Math.random() * 10),
      "New York Subliners": Math.floor(Math.random() * 10),
      "OpTic Texas": Math.floor(Math.random() * 10),
      "Seattle Surge": Math.floor(Math.random() * 10),
      "Toronto Ultra": Math.floor(Math.random() * 10),
      "Vegas Legion": Math.floor(Math.random() * 10),
    },
    {
      date: "May 23",
      "Atlanta FaZe": Math.floor(Math.random() * 10),
      "Boston Breach": Math.floor(Math.random() * 10),
      "Florida Mutineers": Math.floor(Math.random() * 10),
      "London Royal Ravens": Math.floor(Math.random() * 10),
      "Los Angeles Guerillas": Math.floor(Math.random() * 10),
      "Los Angeles Thieves": Math.floor(Math.random() * 10),
      "Minnesota ROKKR": Math.floor(Math.random() * 10),
      "New York Subliners": Math.floor(Math.random() * 10),
      "OpTic Texas": Math.floor(Math.random() * 10),
      "Seattle Surge": Math.floor(Math.random() * 10),
      "Toronto Ultra": Math.floor(Math.random() * 10),
      "Vegas Legion": Math.floor(Math.random() * 10),
    },
    {
      date: "Jun 23",
      "Atlanta FaZe": Math.floor(Math.random() * 10),
      "Boston Breach": Math.floor(Math.random() * 10),
      "Florida Mutineers": Math.floor(Math.random() * 10),
      "London Royal Ravens": Math.floor(Math.random() * 10),
      "Los Angeles Guerillas": Math.floor(Math.random() * 10),
      "Los Angeles Thieves": Math.floor(Math.random() * 10),
      "Minnesota ROKKR": Math.floor(Math.random() * 10),
      "New York Subliners": Math.floor(Math.random() * 10),
      "OpTic Texas": Math.floor(Math.random() * 10),
      "Seattle Surge": Math.floor(Math.random() * 10),
      "Toronto Ultra": Math.floor(Math.random() * 10),
      "Vegas Legion": Math.floor(Math.random() * 10),
    },
  ];


    return (
        <main className="h-full bg-gray-50 p-4 md:p-10 mx-auto max-w-7xl">
            <Card className="mx-auto mb-6 pb-2" decoration="top" decorationColor="indigo">
                <Grid numCols={1} numColsSm={1} numColsLg={1} className="mb-6 gap-2">
                    <Col>
                    <Card>
                    <Title>Most kills by player</Title>
                    <BarChart
                    className="mt-6"
                    data={chartData}
                    index="id"
                    categories={["value"]}
                    colors={["emerald"]}
                    valueFormatter={dataFormatter}
                    yAxisWidth={48}
                />
                        </Card>
                    </Col>
                    <Col>
                    <Card>
                    <Title>Maps played</Title>
                    <DonutChart
                        className="mt-6"
                        data={mapData}
                        category="count"
                        index="name"
                        valueFormatter={dataFormatter}
                        colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
                    />
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                    <Title>Team wins</Title>
                    <AreaChart
                        className="h-72 mt-4"
                        data={resultData}
                        index="date"
                        categories={["Boston Breach", "New York Subliners", "Texas OpTic", "London Royal Ravens", "Atlanta FaZe", "Florida Mutineers", "Vegas Legion", "Los Angeles Guerillas", "Los Angeles Thieves", "Minnesota ROKKR", "Seattle Surge", "Toronto Ultra"]}

                        colors={["indigo", "cyan", "violet", "amber", "emerald", "rose", "teal", "lime", "green", "orange", "pink", "purple"]}

                        valueFormatter={dataFormatter}
                        />
                    </Card>
                    </Col>
                </Grid>
            </Card>
        </main>
      );
}
