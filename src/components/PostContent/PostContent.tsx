import Image from "next/image";
import "./postcontent.scss";

import ill from "../../images/banner-2.jpg";

export default function PostContent() {
  return (
    <div className="post__content">
      <p className="post__content_text">
        The fancy moon going in little artist painting. Thirty days of lavender
        in the dreamy light inside. Other perfect oh plants, for and again. I’ve
        honey feeling. Caring dreamland projects noteworthy than minimal, their
        it oh pretty feeling may. Include pink be.
      </p>
      <Image
        src={ill}
        width={900}
        height={400}
        loading="lazy"
        alt="Картинка в статье"
        className="post__content_image"
      />
      <p className="post__content_text">
        Tortor placerat bibendum consequat sapien, facilisi facilisi
        pellentesque morbi. Id conse ctetur ut vitae a massa a. Lacus ut
        bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent ornare
        accumsan elit venenatis. Congue sodales nunc quis ultricies odio porta.
        Egestas mauris placerat leo phasellu s ut sit.
      </p>
      <h2 className="post__content_header_h2">Use your headings</h2>
      <p className="post__content_text">
        Thirty there & time wear across days, make inside on these you. Can
        young a really, roses blog small of song their dreamy life pretty?
        Because really duo living to noteworthy bloom bell. Transform clean
        daydreaming cute twenty process rooms cool. White white dreamy
        dramatically place everything although. Place out apartment afternoon
        whimsical kinder, little romantic joy we flowers handmade. Thirty she a
        studio of she whimsical projects, afternoon effect going an floated
        maybe.
      </p>
      <Image
        src={ill}
        width={900}
        height={400}
        loading="lazy"
        alt="Картинка в статье"
        className="post__content_image"
      />
      <p className="post__content_text">
        Thirty there & time wear across days, make inside on these you. Can
        young a really, roses blog small of song their dreamy life pretty?
        Because really duo living to noteworthy bloom bell. Transform clean
        daydreaming cute twenty process rooms cool. White white dreamy
        dramatically place everything although. Place out apartment afternoon
        whimsical kinder, little romantic joy we flowers handmade. Thirty she a
        studio of she whimsical projects, afternoon effect going an floated
        maybe.
      </p>
      <p className="post__content_text">
        Thirty there & time wear across days, make inside on these you. Can
        young a really, roses blog small of song their dreamy life pretty?
        Because really duo living to noteworthy bloom bell. Transform clean
        daydreaming cute twenty process rooms cool. White white dreamy
        dramatically place everything although. Place out apartment afternoon
        whimsical kinder, little romantic joy we flowers handmade. Thirty she a
        studio of she whimsical projects, afternoon effect going an floated
        maybe.
      </p>
      <p className="post__content_text">
        Thirty there & time wear across days, make inside on these you. Can
        young a really, roses blog small of song their dreamy life pretty?
        Because really duo living to noteworthy bloom bell. Transform clean
        daydreaming cute twenty process rooms cool. White white dreamy
        dramatically place everything although. Place out apartment afternoon
        whimsical kinder, little romantic joy we flowers handmade. Thirty she a
        studio of she whimsical projects, afternoon effect going an floated
        maybe.
      </p>
    </div>
  );
}
