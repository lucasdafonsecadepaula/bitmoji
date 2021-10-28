import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import * as libmoji from "../../libmoji/build/index";

const allPossibleFeatures = {
  beard: 0,
  brow: 0,
  cheek_details: 0,
  ear: 0,
  eye: 0,
  eyelash: 0,
  eye_details: 0,
  face_lines: 0,
  glasses: 0,
  hair: 0,
  hat: 0,
  jaw: 0,
  mouth: 0,
  nose: 0,
  beard_tone: 0,
  blush_tone: 0,
  brow_tone: 0,
  eyeshadow_tone: 0,
  hair_tone: 0,
  hair_treatment_tone: 0,
  lipstick_tone: 0,
  pupil_tone: 0,
  skin_tone: 0,
  body: 0,
  face_proportion: 0,
  eye_spacing: 0,
  eye_size: 0,
  earring: 0,
  pupil: 0,
  breast: 0,
  outfit: 0,
};

export default function Home() {
  let gender = libmoji.genders[libmoji.randInt(2)];
  let style = libmoji.styles[libmoji.randInt(3)];
  let traits = libmoji.randTraits(libmoji.getTraits(gender[0], style[0]));
  let outfit = libmoji.randOutfit(
    libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(gender[0])))
  );

  const [text, setText] = useState("");
  const [previewUrlEmoji, setPreviewUrlEmoji] = useState();
  const [buttonToChangeChar, setButtonToChangeChar] = useState();
  const [loop, setLoop] = useState(allPossibleFeatures);

  const [charEmoji, setCharEmoji] = useState({
    pose: "body",
    scale: 1,
    gender: gender,
    style: style,
    rotation: 7,
    traits: traits,
    outfit: outfit,
  });

  useEffect(() => {
    setPreviewUrlEmoji(
      libmoji.buildPreviewUrl(
        charEmoji.pose,
        charEmoji.scale,
        charEmoji.gender[1],
        charEmoji.style[1],
        charEmoji.rotation,
        charEmoji.traits,
        charEmoji.outfit
      )
    );
    if (charEmoji.gender[1] == 1) {
      if (charEmoji.style[1] == 1) {
        setButtonToChangeChar([key1, result1]);
      }
      if (charEmoji.style[1] == 4) {
        setButtonToChangeChar([key2, result2]);
      }
      if (charEmoji.style[1] == 5) {
        setButtonToChangeChar([key3, result3]);
      }
    }
    if (charEmoji.gender[1] == 2) {
      if (charEmoji.style[1] == 1) {
        setButtonToChangeChar([keyf1, resultf1]);
      }
      if (charEmoji.style[1] == 4) {
        setButtonToChangeChar([keyf2, resultf2]);
      }
      if (charEmoji.style[1] == 5) {
        setButtonToChangeChar([keyf3, resultf3]);
      }
    }
  }, [charEmoji]);

  const key1 = libmoji.getTraits("male", "bitstrips").map((e) => e.key);
  const options1 = libmoji.getTraits("male", "bitstrips").map((e) => e.options);
  const values1 = options1.map((options) => options.map((e) => e.value));
  const result1 = Object.assign(...key1.map((k, i) => ({ [k]: values1[i] })));

  const key2 = libmoji.getTraits("male", "bitmoji").map((e) => e.key);
  const options2 = libmoji.getTraits("male", "bitmoji").map((e) => e.options);
  const values2 = options2.map((options) => options.map((e) => e.value));
  const result2 = Object.assign(...key2.map((k, i) => ({ [k]: values2[i] })));

  const key3 = libmoji.getTraits("male", "cm").map((e) => e.key);
  const options3 = libmoji.getTraits("male", "cm").map((e) => e.options);
  const values3 = options3.map((options) => options.map((e) => e.value));
  const result3 = Object.assign(...key3.map((k, i) => ({ [k]: values3[i] })));

  const keyf1 = libmoji.getTraits("female", "bitstrips").map((e) => e.key);
  const optionsf1 = libmoji
    .getTraits("female", "bitstrips")
    .map((e) => e.options);
  const valuesf1 = optionsf1.map((options) => options.map((e) => e.value));
  const resultf1 = Object.assign(
    ...keyf1.map((k, i) => ({ [k]: valuesf1[i] }))
  );

  const keyf2 = libmoji.getTraits("female", "bitmoji").map((e) => e.key);
  const optionsf2 = libmoji
    .getTraits("female", "bitmoji")
    .map((e) => e.options);
  const valuesf2 = optionsf2.map((options) => options.map((e) => e.value));
  const resultf2 = Object.assign(
    ...keyf2.map((k, i) => ({ [k]: valuesf2[i] }))
  );

  const keyf3 = libmoji.getTraits("female", "cm").map((e) => e.key);
  const optionsf3 = libmoji.getTraits("female", "cm").map((e) => e.options);
  const valuesf3 = optionsf3.map((options) => options.map((e) => e.value));
  const resultf3 = Object.assign(
    ...keyf3.map((k, i) => ({ [k]: valuesf3[i] }))
  );

  const male_outfit = libmoji
    .getBrands("male")
    .map((e) => e.outfits.map((e) => e.id));
  const female_outfit = libmoji
    .getBrands("female")
    .map((e) => e.outfits.map((e) => e.id));

  // const sla = {
  //   male: {
  //     gender: 1,
  //     styles: {
  //       bitstrips: { value: 1, car_traits: result1 },
  //       bitmoji: { value: 4, car_traits: result2 },
  //       cm: { value: 5, car_traits: result3 },
  //     },
  //     outfits: male_outfit.flat(),
  //   },
  //   female: {
  //     gender: 2,
  //     styles: {
  //       bitstrips: { value: 1, car_traits: resultf1 },
  //       bitmoji: { value: 4, car_traits: resultf2 },
  //       cm: { value: 5, car_traits: resultf3 },
  //     },
  //     outfits: female_outfit.flat(),
  //   },
  // };

  const replaceUrlEmoji = (att) => {
    if (att.gender[1] == 1) {
      if (att.style[1] == 1) {
        att.traits = key1.map((item) => {
          return [
            item,
            result1[item][Math.floor(Math.random() * result1[item].length)],
          ];
        });
      }

      if (att.style[1] == 4) {
        att.traits = key2.map((item) => {
          return [
            item,
            result2[item][Math.floor(Math.random() * result2[item].length)],
          ];
        });
      }

      if (att.style[1] == 5) {
        att.traits = key3.map((item) => {
          return [
            item,
            result3[item][Math.floor(Math.random() * result3[item].length)],
          ];
        });
      }
    }

    if (att.gender[1] == 2) {
      if (att.style[1] == 1) {
        att.traits = keyf1.map((item) => {
          return [
            item,
            resultf1[item][Math.floor(Math.random() * resultf1[item].length)],
          ];
        });
      }

      if (att.style[1] == 4) {
        att.traits = keyf2.map((item) => {
          return [
            item,
            resultf2[item][Math.floor(Math.random() * resultf2[item].length)],
          ];
        });
      }

      if (att.style[1] == 5) {
        att.traits = keyf3.map((item) => {
          return [
            item,
            resultf3[item][Math.floor(Math.random() * resultf3[item].length)],
          ];
        });
      }
    }
    setCharEmoji(att);
  };

  const changeTraitsEmoji = (arr, item) => {
    let index = charEmoji.traits.map((e) => e[0]).indexOf(item);
    console.log(arr)
    
    if (index == -1) {
      let newArray = charEmoji.traits.concat(([item, arr[loop[item]]]))
      setCharEmoji({ ...charEmoji, traits: newArray });
      setLoop({ ...loop, [item]: loop[item] + 1 });
      setText(arr[loop[item]]);
      return;
    }
    if(loop[item] >= arr.length) {
      charEmoji.traits[index] = [item, arr[0]];
      setCharEmoji({ ...charEmoji});
      setLoop({ ...loop, [item]: 0 });
      setText(arr[0]);
      return;
    }
    charEmoji.traits[index] = [item, arr[loop[item]]];
    setCharEmoji({ ...charEmoji});
    setLoop({ ...loop, [item]: loop[item] + 1 });
    setText(arr[loop[item]]);
  };

  const changeOutfitEmoji = () =>{
    if(charEmoji.gender[1] === 1){
      if(loop.outfit >= male_outfit.flat().length){
        setCharEmoji({...charEmoji, outfit: male_outfit.flat()[0]})
        setLoop({...loop, outfit: 0})
        return;
      }
      setCharEmoji({ ...charEmoji, outfit: male_outfit.flat()[loop.outfit]})
      setLoop({...loop, outfit: loop.outfit + 1})
    }
    if(charEmoji.gender[1] === 2){
      if(loop.outfit >= female_outfit.flat().length){
        setCharEmoji({...charEmoji, outfit: female_outfit.flat()[0]})
        setLoop({...loop, outfit: 0})
        return;
      }
      setCharEmoji({ ...charEmoji, outfit: male_outfit.flat()[loop.outfit]})
      setLoop({...loop, outfit: loop.outfit + 1})
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{text}</h1>
        <img src={previewUrlEmoji} />
        <button
          type="button"
          onClick={() =>
            setPreviewUrlEmoji(
              libmoji.buildPreviewUrl(
                "body",
                1,
                gender[1],
                style[1],
                7,
                traits,
                outfit
              )
            )
          }
        >
          ALEATORIO
        </button>
        <div>
          <button
            type="button"
            onClick={() =>
              replaceUrlEmoji({ ...charEmoji, gender: ["male", 1] })
            }
          >
            Homem
          </button>
          <button
            type="button"
            onClick={() =>
              replaceUrlEmoji({ ...charEmoji, gender: ["female", 2] })
            }
          >
            Mulher
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() =>
              replaceUrlEmoji({ ...charEmoji, style: ["bitstrips", 1] })
            }
          >
            bitstrips
          </button>
          <button
            type="button"
            onClick={() =>
              replaceUrlEmoji({ ...charEmoji, style: ["bitmoji", 4] })
            }
          >
            bitmoji
          </button>
          <button
            type="button"
            onClick={() => replaceUrlEmoji({ ...charEmoji, style: ["cm", 5] })}
          >
            cm
          </button>
        </div>
        <div>
          {buttonToChangeChar &&
            buttonToChangeChar[0].map((e) => {
              return (
                <button
                  key={e}
                  type="button"
                  onClick={() => changeTraitsEmoji(buttonToChangeChar[1][e], e)}
                >
                  {e}
                </button>
              );
            })}
        </div>
        <div>
            <button type="button" onClick={() => changeOutfitEmoji()}>Outfits</button>
        </div>
      </main>
    </div>
  );
}
