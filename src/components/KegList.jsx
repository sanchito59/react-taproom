import React from "react";
import PropTypes from "prop-types";

// Components
import Header from "./Header";
import Keg from "./Keg";

export default function KegList(props) {
  const availableKegs = [
    {
      name: "African Amber",
      brand: "Mac & Jack's",
      price: "5.49",
      alcoholContent: "6.7",
      IBU: "30",
      description:
        "This beer erupts with a floral, hoppy taste, followed by a well rounded malty middle, finishing with a nicely organic hop flavor."
    },
    {
      name: "Montucky Cold Snack",
      brand: "Montucky Cold Snacks",
      price: "2.79",
      alcoholContent: "4.1",
      IBU: "n/a",
      description:
        "Refreshing light beer for pow pow rippers, pony riders, gator wranglers, and badass do-gooders."
    },
    {
      name: "Ruby",
      brand: "McMenamins",
      price: "4.50",
      alcoholContent: "4.13",
      IBU: "5",
      description:
        "An ale that's light, crisp and refreshingly fruity. Great Western Premium 2-Row and 42 pounds of Oregon-grown raspberry puree is used to craft every colorful batch."
    },
    {
      name: "Oatmeal Stout",
      brand: "Oakshire",
      price: "6.00",
      alcoholContent: "6.5",
      IBU: "40",
      description:
        "A dark beer brewed with oatmeal to give a slightly nutty flavor, with finishing notes of dark chocolate and espresso beans."
    },
    {
      name: "Blue Ribbon",
      brand: "Pabst",
      price: "3.00",
      alcoholContent: "4.6",
      IBU: "10",
      description:
        "Sticky dive bars and ragers can attest- the cool, refreshing taste of a Pabst Blue Ribbon is seldom matched."
    }
  ];

  const kegListPage = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1575844537064-29b4655170a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    paddingBottom: "10px"
  };

  return (
    <div style={kegListPage}>
      <Header />
      {availableKegs.map((keg, index) => (
        <Keg
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          IBU={keg.IBU}
          description={keg.description}
          key={index}
        />
      ))}
      {props.kegList.map(keg => (
        <Keg
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          IBU={keg.IBU}
          description={keg.description}
          key={keg.id}
        />
      ))}
    </div>
  );
}
