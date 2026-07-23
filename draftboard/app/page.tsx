// it will disply the stock image and everything else. 
// for now hardcoded  hardcoding a random player and adding an image to see if ti works before spending so much time on it

import React from 'react';
import Image from 'next/image'
import "@fontsource/oswald";
import "@fontsource/passion-one";
import "@fontsource/luckiest-guy";
import { Stars } from "@/app/components/Stars"


export default function Card() {
  return (
    <>

      <div style={{ backgroundColor: "#002D62" }}>
        <h1 style={{ color: "#FFFFFF", fontSize: 200 }} > Oliver Giroud</h1>
        <div>
          <div>
            <p>honors</p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/player-images/lukas.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <section style={{ backgroundColor: "#240050", width: '200px', height: '500px' }}>
          <section className="flex justify-center items-baseline gap-2">
            <div className="flex gap-2">{Stars}</div>

            <h1
              className="flex items-center text-black"
              style={{ fontFamily: "Luckiest Guy" }}
            >
              <p>NBA HO</p>
              <Image
                src="/player-images/basketball.svg"
                width={15}
                height={15}
                style={{ paddingBottom: '5px' }}
                alt="Basketball"
              />
              <p>PS</p>
            </h1>
            <div className="flex gap-2">{Stars}</div>
          </section>


          <div style={{ borderRadius: "50%", width: '150px', height: '150px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', borderColor: '#EAC77C', borderStyle: 'solid', borderWidth: '2px' }}>
            <div style={{ width: "100%", height: "100%", objectFit: "cover" }}>
              <Image
                src="/player-images/lakers.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
          <section>
            <p style={{ fontFamily: 'Oswald', color: "#FFFFFF" }}>LeBRON JAMES</p>
            <p style={{ fontFamily: 'Passion One', color: "#FFFFFF" }}>LAKERS</p>
          </section>
        </section >
      </div >
    </>

  );
}

// 2. Build the functional component
/*export default function MyComponent() {
  return (
    <>
      <div>
        <p> MINNESOTA NORTHSTARS</p>
        <h1> CALEB THORNE</h1>
        <p>"THE HAWK"</p>
        <p>GUARD</p>
        <p>6.4</p>
        <p>WINGSPAN 6'8"</p>
      </div>
      <div>
        <h1 style={{ color: "#552583", fontSize: 200 }} > CLIPPERS</h1>
        <h1 style={{ color: "#552583", fontSize: 200 }}> #13</h1>
      </div>

      <div style={{ backgroundColor: "#002D62" }}>
        <h1 style={{ color: "#FFFFFF", fontSize: 200 }} > Oliver Giroud</h1>
        <div style={{ backgroundColor: lighten("#002D62", 0.15) }}>
          <div>
            <p>honors</p>
          </div>
        </div>
        <Image
          src="/player-images/OklahomaCity.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </>

  );
} */

Card()