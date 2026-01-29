"use client";

import { Container, Paper, Button, Heading, TextArea} from "dandy-ui";


export default function Page(){

    return (
       <Container className="mt-8" maxWidth="6xl">
          <Paper outlined className="p-4">
            <Heading level={1}>
                Hello World
            </Heading>
           <Button  >
            Hello Button
           </Button>

           <TextArea errorMessage="Email is Incorrect, please enter a valid Email" />
        </Paper>
       </Container>
    )
}