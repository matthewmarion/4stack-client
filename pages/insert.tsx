import Navbar from '../navbar';
import {Card, Grid, Col, Title, Subtitle, TextInput, Button} from '@tremor/react';
import NewTeam from './new-team';
import NewPlayer from './new-player';
import NewMatch from './new-match';
import NewGame from './new-game';
import NewMap from './new-map';
import NewMode from './new-mode';
import NewStatLine from './new-statline';

export default function Insert(props) {
    console.log(props)
    return (
        <main className="h-full bg-gray-50 p-4 md:p-10 mx-auto max-w-7xl">
            <Card className="mx-auto mb-6 pb-2" decoration="top" decorationColor="indigo">
                <Grid numCols={1} numColsSm={1} numColsLg={1} className="mb-6 gap-2">
                    <Col>
                        <NewTeam />
                    </Col>
                    <Col>
                        <NewPlayer teams={props.models.teams} />
                    </Col>
                    <Col>
                        <NewMatch teams={props.models.teams} />
                    </Col>
                    <Col>
                        <NewGame maps={props.models.maps} modes={props.models.modes} matches={props.models.matches} />
                    </Col>
                    <Col>
                        <NewMap />
                    </Col>
                    <Col>
                        <NewMode />
                    </Col>
                    <Col>
                        <NewStatLine players={props.models.players} games={props.models.games} />
                    </Col>
                </Grid>
            </Card>
        </main>
      );
}
