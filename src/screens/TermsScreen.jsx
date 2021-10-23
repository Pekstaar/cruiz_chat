import React from "react";
import { HiAdjustments } from "react-icons/hi";
import { Footer, Navigation } from "../components/home";
import { NavContext } from "../Store";

export const TermsScreen = () => {
  return (
    <>
      <NavContext>
        <Navigation />
      </NavContext>
      <div
        className=" bg-gray-50 container m-auto p-7"
        style={{ height: "800px", overflowY: "scroll" }}
      >
        <div className="top flex justify-between items-center">
          <HiAdjustments className="text-2xl text-indigo-700" />

          <h2 className="text-center text-xl text-indigo-700 uppercase slab underline font-medium">
            Terms and Condition
          </h2>
          <div className="div"></div>
        </div>

        <div className="my-5 text-gray-500 leading-7">
          <h2 className="text-indigo-600 text-base font-medium slab ">
            last updated at 20 October 2021
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, cum.
            Accusantium vero, quam hic aliquam molestiae voluptate, <br />
            quibusdam, corrupti neque iste voluptatibus itaque earum corporis
            non sapiente ipsum ratione fugiat <br /> consequuntur architecto
            ipsa veritatis facere nihil tenetur quas. Sint, quasi.
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            suscipit veniam asperiores vel nulla dolor, modi temporibus fugiat
            corporis, eius consequatur necessitatibus libero? Sit excepturi
            labore doloremque, rerum magni nemo?
          </p>
          <br />x <h2 className="slab font-medium">Governing Law</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            voluptatem voluptatum perspiciatis commodi! Iusto quisquam similique
            quia tempora totam incidunt illo nisi ratione aut nostrum rem dicta
            placeat molestias error a omnis eos magnam, soluta non officia,
            perspiciatis reprehenderit. Enim explicabo rerum non doloremque
            ullam tenetur fugit qui magnam vel soluta adipisci odio modi, totam
            placeat labore cumque quos aliquam iusto. Exercitationem eaque ullam
            voluptatum nostrum, aspernatur corrupti ipsam est architecto et
            blanditiis nihil harum non distinctio, quis eum mollitia deleniti
            quaerat facilis eligendi laboriosam facere nam tempora reiciendis!
            Vel illo repellendus quos ratione tempore eaque debitis nam quis?
            Neque perferendis esse inventore. Explicabo doloremque quidem
            ratione aperiam id consequatur eveniet totam debitis inventore
            architecto, magnam facilis provident est libero quibusdam aspernatur
            molestiae recusandae eligendi repellat alias nobis sit perspiciatis!
            Veniam voluptas, labore quidem delectus dolorem ratione provident
            corporis eveniet dolorum deleniti perspiciatis ducimus. Blanditiis
            voluptas veritatis velit quaerat maiores, deleniti, magni est odit
            error quasi quos quo. Pariatur, voluptatem? Illo harum nostrum ipsa
            veniam! Vel laboriosam aut consequatur repudiandae natus obcaecati
            praesentium unde sed corrupti aliquam iure a nobis exercitationem,
            molestias doloribus dignissimos eum pariatur doloremque
            reprehenderit voluptas quos rerum assumenda incidunt? Assumenda
            aliquid quas ut porro rerum, hic vel est, sapiente similique
            quibusdam fugiat officiis, quaerat aut modi cupiditate nemo quia
            quae quam atque! Porro fuga quaerat eos explicabo magnam autem,
            doloremque dicta, alias unde quibusdam nesciunt sequi, a quae?
            Magnam assumenda, maiores modi autem eius debitis quaerat temporibus
            totam voluptate? Nostrum quaerat dolores totam dolor expedita
            cupiditate iure, illo voluptates alias aliquam veniam molestiae vero
            reprehenderit repellat quasi voluptas reiciendis ut doloremque neque
            dignissimos. Temporibus voluptatum aut culpa officiis omnis ipsam
            saepe iure ducimus corporis, facere, obcaecati totam et soluta
            necessitatibus? Possimus dolore eos veniam fuga saepe temporibus id
            vero ea accusantium, est at, atque tenetur mollitia!
          </p>
          <br />
          <h2 className="text-base font-medium slab ">Link to othe sites</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            eos illo? Eius quia ea totam facilis omnis unde adipisci iusto nemo
            beatae. Qui facilis ipsa assumenda laudantium illum officiis hic
            dolore? Labore, perferendis fugiat illum nobis fugit animi eaque
            error blanditiis facilis obcaecati repellat quidem soluta possimus
            aspernatur laboriosam repellendus dolorum quos laudantium et aut
            quae tempora. Dolor recusandae amet consequuntur harum est similique
            neque fugit ratione saepe, corporis aliquam fuga, voluptates cum
            cumque itaque quo, earum deserunt nobis dolores! Laboriosam
            excepturi accusantium est necessitatibus ipsum dicta commodi aliquam
            voluptates reprehenderit iste voluptate laudantium dolorum ad quae
            in temporibus, qui tempora quasi delectus perferendis doloribus
            inventore non? Fugiat vel magni unde corporis odio incidunt vitae
            eveniet asperiores sint! Soluta, repellat veritatis. Recusandae,
            excepturi nam provident voluptatem quas ab obcaecati saepe sit nemo
            culpa rerum quisquam veritatis pariatur a iure quibusdam odit
            temporibus ipsam vero ducimus, minima eos omnis commodi. Officia
            excepturi animi rem soluta praesentium, explicabo ut delectus
            facilis iste provident natus et incidunt fugit amet. Aliquam, optio
            veniam? Nobis iste maiores libero dignissimos eveniet consequuntur
            repudiandae at temporibus illo, nisi, vero veniam? Commodi, officia
            dignissimos ducimus at sunt consequatur facilis veniam similique
            delectus, tempora incidunt quod sint, id voluptatem?
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};
