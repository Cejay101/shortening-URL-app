import React, { useEffect, useState } from "react";
import shortnen from "../images/bg-shorten-desktop.svg";

const getLocalStorage = () => {
  let allLinks = localStorage.getItem("allLinks");

  if (allLinks) {
    return JSON.parse(localStorage.getItem("allLinks"));
  } else {
    return [];
  }
};
// console.log(getLocalStorage());
export default function ShortenLink() {
  const [url, setUrl] = useState("");
  const [Links, setLinks] = useState([]);
  const [buttonText, setButtonText] = useState("copy");
  const [allLinks, setAllLinks] = useState(getLocalStorage());
  const [empty, setEmpty]= useState(false)

  // useEffect(()=>{

  // },)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) {
      alert("empty input");
      setEmpty(false)
    } else {
      //check link
      const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const data = await res.json();
        console.log(data);
        setLinks(data.result);
      };
      shortenLink();
      if (allLinks.length === 0) {
        setAllLinks([Links]);
 
        console.log(Links)
      } else {
        setAllLinks([...allLinks, Links]);
    
      }
      console.log(allLinks);
      
      setEmpty(true)
    }
  };
  
  const filteredData = allLinks.filter((obj) => Object.keys(obj).length > 0);
  useEffect(() => {
    localStorage.setItem("allLinks", JSON.stringify(allLinks));
  }, [allLinks]);

  const handleCopy = (e) => {
navigator.clipboard.writeText(Links.full_short_link);
setButtonText("copy");
e.target.textContent ="copied"
  };

  return (
    <div>
      <form
        className="shorten-link"
        onSubmit={handleSubmit}
        style={{ backgroundImage: `url("${shortnen}")` }}
      >
        <input
          placeholder="Shorten a link here..."
          onChange={(e) => setUrl(e.target.value)}
        ></input>
        <button>Shorten It!</button>
      </form>
      <div>
        {empty && (
          <ul className="shortened-link">
            <li>{Links.original_link}</li>
            <li>{Links.full_short_link}</li>
            <button onClick={handleCopy}>{buttonText}</button>
          </ul>
        )}
        {/* <p>{allLinks.length}</p>{ */}
        <ul>
          {filteredData.slice(-4).reverse().map((link) => (
            <ul className="shortened-link" key={Math.random()*1000}>
              
              <li>{link.original_link}</li>
              <li>{link.full_short_link}</li>
              <button onClick={handleCopy}>{buttonText}</button>
            </ul>
            // <li>{link.full_short_link}</li>
          ))}
        </ul>
        ;
      </div>
    </div>
  );
}
