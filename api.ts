const API_KEY = '120deccb8ea874887762e9e99cb4fbc2'
const API_BASE = 'https://api.themoviedb.org/3'


const basicFetch = async (endpoint: string) => {
    var req: any
    try {
       req = await fetch(`${API_BASE}${endpoint}`);
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
          } else {
            console.log('Unexpected error', err);
          }
    } 
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async() => {
        return [
            {
                slug: 'toprated',
                title: 'Filmes Populares',
                items: await basicFetch(`/movie/top_rated?language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'releases',
                title: 'Proximos Lançamentos',
                items: await basicFetch(`/discover/movie?with_genres=new&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },
    getMovieInfo: async (movieId: any, type: any) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    return  info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                case 'tv':
                    return info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
            }
        }

    }
}