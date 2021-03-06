import ReactDOM from "react-dom";
import React, { Fragment, useEffect, useState } from "react";
import "./image.modules.css";
import { createApi } from "unsplash-js";

// const PHOTOS_PATH_PREFIX = '/photos';

const api = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: "Hd3z_BJ0m1_BOdWQ9U14ifHyLtEe6z6l4L1Kn-AHDiA"
});

const PhotoComp = ({ photo }) => {
    const { user, urls } = photo;

    return (
        <Fragment>
            <img className="img" src={urls.regular} />
            <a
                className="credit"
                target="_blank"
                href={`https://unsplash.com/@${user.username}`}
            >
                {user.name}
            </a>
        </Fragment>
    );
};

const Body = () => {
    const [data, setPhotosResponse] = useState(null);

    useEffect(() => {
        api.search
            .getPhotos({ query: "cat", orientation: "landscape" })
            .then(result => {
                setPhotosResponse(result);
            })
            .catch(() => {
                console.log("something went wrong!");
            });
    }, []);

    if (data === null) {
        return <div>Loading...</div>;
    } else if (data.errors) {
        return (
            <div>
                <div>{data.errors[0]}</div>
                <div>PS: Make sure to set your access token!</div>
            </div>
        );
    } else {
        return (
            <div className="feed">
                <ul className="columnUl">
                    {data.response.results.map(photo => (
                        <li key={photo.id} className="li">
                            <PhotoComp photo={photo} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

const Home = () => {
    return (
        <main className="root">
            <Body />
        </main>
    );
};

ReactDOM.render(<Home />, document.getElementById("root"));




export default Image

// export const getRandom = (() => {
//     const getPathname = () => `${PHOTOS_PATH_PREFIX}/random`;
//     return makeEndpoint({
//       getPathname,
//       handleRequest: createRequestHandler(
//         ({ collectionIds, contentFilter, topicIds, ...queryParams }: RandomParams = {}) => ({
//           pathname: getPathname(),
//           query: compactDefined({
//             ...queryParams,
//             content_filter: contentFilter,
//             ...Query.getCollections(collectionIds),
//             ...Query.getTopics(topicIds),
//           }),
//           headers: {
//             /**
//              * Avoid response caching
//              */
//             'cache-control': 'no-cache',
//           },
//         }),
//       ),
//       handleResponse: castResponse<
//         // An array when the `count` query parameter is used.
//         Photo.Random | Photo.Random[]
//       >(),
//     });
//   })();