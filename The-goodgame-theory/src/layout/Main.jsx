import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Input from "../MicroComponents/Input";
import Button from "../MicroComponents/Button";
import { allBears, searchBeer } from "../api/beer";
import SingleBeer from "../components/SingleBeer";
import Loading from "../components/Loading";


const Main = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    allBears()
    .then(data =>{
        setBeers(data)
        console.log(data)
    })
  },[])
  const searchFunction = () =>{
    setLoading(true)
    searchBeer(search)
    .then(data=>{
        setBeers(data)
    })
    setLoading(false)
  }
  if (loading) {
    return <Loading />
  }
  return (
    <div className="max-w-6xl mx-auto ">
      <Navbar />
      <Banner />
      <div className="flex justify-center mt-3 gap-2 mb-5">
        <Input
          title="Search Beer Here"
          search={search}
          setSearch={setSearch}
          searchFunction={searchFunction}
        ></Input>
        {/* <Button title="Search"></Button> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        { Array.isArray(beers) && beers.length > 0 && beers.map((beer) => (
          <SingleBeer key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default Main;
