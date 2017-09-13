export const fetchAllPokemon = () => (
  $.ajax({
    type: "JSON",
    method: "GET",
    url: "/api/pokemon"
  })
);
