import Hike_obj from "../components/Hike_obj";

  //get a list of hikes
  export function populateHikes (body){
    let hikesList = [];
    for (let element_i in body) {
      const hike_preprocess = body[element_i];
      //hike length?
      //create a hike js object
      const hike = new Hike_obj(hike_preprocess.name, hike_preprocess.city, hike_preprocess.state,
                            hike_preprocess.country, hike_preprocess.lat, hike_preprocess.lon,
                            hike_preprocess.parent_id, hike_preprocess.place_id,
                            hike_preprocess.description);
      hikesList.push(hike);
      console.log(hike);
    }
    return hikesList;
  }