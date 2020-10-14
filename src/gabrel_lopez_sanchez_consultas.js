/* Películas de entre 1960 y 2000 */
db.peliculas.find(
    {
        year:{$gt:1960, $lt:2000}
    }
)

/* Películas de George Lucas */
db.peliculas.find(
    {
        director: {$eq: "George Lucas"}
    }
)

/* Películas con un rating de tomato entre 4 y 8.5 */
db.peliculas.find(
	{
	"tomato.rating": {$gte: 4.0, $lte: 8.5}
	}
)

/* Películas de George Lucas, en las que participa Harrison
Ford y son de entre 1975 y 2000 */
db.peliculas.find(
    {
        $and: [
        {director: {$eq: "George Lucas"}},
        {actors: {$eq: "Harrison Ford"}},
        {year: {$gt:1975, $lt:2000}}
        ]
    }
)
/* Películas tengan un segundo país y sea alguno de la lista */
db.peliculas.find(
	{
		"countries.1": {$exists:true},
		"countries.1": {$in:["Spain","USA","Italy","UK"]},
	}
)

/* Películas cuyo director no tenga un nombre que empiece por
John  (17/20)*/
db.peliculas.find(
    {
        director:{$not:{$regex:"John*"}}
    }
)




