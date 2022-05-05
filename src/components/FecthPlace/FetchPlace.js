const FetchPlace = async (text) => {
    try {
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?types=place&autocomplete=true&fuzzyMatch=true&access_token=pk.eyJ1IjoiYXhlbGIiLCJhIjoiY2wydDl3ZGV0MDI5NjNlbXdxa3NpZThxMyJ9.sR9fSpl1KCL2h6cJcO6wxA`
      );
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    } catch (err) {
      return { error: "Unable to retrieve places" };
    }
  };

export default FetchPlace
