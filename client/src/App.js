import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./App.css";
import "antd/dist/antd.css";
import Title from "./components/layout/Title";
import People from "./components/lists/People";
import AddPerson from "./components/forms/AddPerson";
import AddCar from "./components/forms/AddCar";
import Cars from "./components/lists/Cars";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});

const App = () => (
    <ApolloProvider client={client}>
        <div className="App">
            <Title />
            <AddPerson />
            <People />
            <AddCar />
            <Cars />
        </div>
    </ApolloProvider>
);

export default App;
