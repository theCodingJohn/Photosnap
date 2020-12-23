import React from 'react'
import Nav from "../Nav/Nav";
import Card from "../Card/Card";

function Stories() {
  return (
    <> 
      <Nav list={{firstLink: 'home', secondLink: 'features', thirdLink: 'pricing'}}/>
      <main>
        <section className="card-container">
          <Card card={ {id: 1,name: "The Mountains", author: "John Appleseed", date: "April 16th 2020"}}/>
          <Card card={ {id: 2,name: "Sunset Cityscapes", author: "Benjamin Cruz", date: "April 14th 2020"}}/>
          <Card card={ {id: 3,name: "18 Days Voyage", author: "Alexei Borodin", date: "April 11th 2020"}}/>
          <Card card={{ id: 4, name: "Architecturals", author: "Samantha Brooke", date: "April 9th 2020"}} />
          <Card card={{ id: 5, name: "World Tour 2019", author: "Timothy Wagner", date: "April 7th 2020"}} />
          <Card card={{ id: 6, name: "Unforseen Corners", author: "William Malcolm", date: "April 3rd 2020"}} />
          <Card card={{ id: 7, name: "King of Africa: II", author: "Tim Hillenburg", date: "March 29th 2020"}} />
          <Card card={{ id: 8, name: "The Trip to Nowhere", author: "Felicia Rourke", date: "March 21st 2020"}} />
          <Card card={{ id: 9, name: "Rage of the Sea", author: "Mohammed Abdul", date: "March 19th 2020"}} />
          <Card card={{ id: 10, name: "Running Free", author: "Michelle", date: "March 16th 2020"}} />
          <Card card={{ id: 11, name: "Behind the Waves", author: "Lamarr Wilson", date: "March 11th 2020"}} />
          <Card card={{ id: 12, name: "Calm Waters", author: "Samantha Brooke", date: "March 9th 2020"}} />
          <Card card={{ id: 13, name: "The Milky Way", author: "Benjamin Cruz", date: "March 5th 2020"}} />
          <Card card={{ id: 14, name: "Night at the Dark Forest", author: "Mohammed Abdul", date: "March 4th 2020"}} />
          <Card card={{ id: 15, name: "Somwarpet's Beauty", author: "Michelle", date: "March 1st 2020"}} />
          <Card card={{ id: 16, name: "Land of Dreams", author: "William Malcolm", date: "February 25th 2020"}} />
        </section>
      </main>
    </>
  )
}

export default Stories
