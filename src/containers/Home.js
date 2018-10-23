import React from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';


export default class Home extends React.Component {
    render() {
        return (
            <div >
                <Card>
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </CardBody>
                    <CardFooter>Footer</CardFooter>
                </Card>
                <Card>
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </CardBody>
                    <CardFooter>Footer</CardFooter>
                </Card>
                <Card>
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </CardBody>
                    <CardFooter>Footer</CardFooter>
                </Card>
            </div>
        );
    };
}