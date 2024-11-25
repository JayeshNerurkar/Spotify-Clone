import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import NC from './NC.jpeg'
import BOF from './BOF.jpeg'
import FEN from './FEIN.jpeg'
import EOB from './EOB.jpeg'
import ESP from './ESP.jpeg'
import Y from './Y.jpeg'
import NEM from './NEM.jpeg'
import I from './I.jpeg'
import NightChanges from  './Night Changes.mp3'
import BIRDSOFAFEATHER from  './BIRDS OF A FEATHER.mp3'
import FEIN from  './FE!N (feat. Playboi Carti).mp3'
import EndofBeginning from  './End of Beginning.mp3'
import Espresso from  './Espresso.mp3'
import Yellow from  './Yellow.mp3'
import TheNightWeMet from  './The Night We Met.mp3'
import IWannaBeYours from  './I Wanna Be Yours.mp3'


export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon,
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Night Changes",
        image: NC,
        file:NightChanges,
        desc:"Reflecting on fleeting youth and love",
        duration:"3:00",
        artist: "One Direction"
    },
    {
        id:1,
        name: "BIRDS OF FEATHER",
        image: BOF,
        file:BIRDSOFAFEATHER,
        desc:"Bonding deeply through shared similarities",
        duration:"2:20",
        artist: "Billie Eilish"
    },
    {
        id:2,
        name: "FE!N (feat. Playboi)",
        image: FEN,
        file:FEIN,
        desc:"Energetic, bold rap banger with attitude.",
        duration:"2:32",
        artist: "Travis Scott"
    },
    {
        id:3,
        name: "End of Beginning",
        image: EOB,
        file:EndofBeginning,
        desc:"Reflective closure and hopeful renewal.",
        duration:"2:50",
        artist: "Djo"
    },
    {
        id:4,
        name: "Espresso",
        image: ESP,
        file:Espresso,
        desc:"Jazzy, lively, caffeinated instrumental rush.",
        duration:"3:10",
        artist: "Sabrina Carpenter"
    },
    {
        id:5,
        name: "Yellow",
        image: Y    ,
        file:Yellow,
        desc:"Glowing, warm ode to unconditional love.",
        duration:"2:45",
        artist: "Coldplay"
    },
    {
        id:6,
        name: "The Night We Met",
        image: NEM,
        file:TheNightWeMet,
        desc:"Haunting, melancholic song of lost love",
        duration:"2:18",
        artist: "Lord Huron"
    },
    {
        id:7,
        name: "I Wanna Be Yours",
        image: I,
        file:IWannaBeYours,
        desc:"Passionate, poetic pledge of devotion.",
        duration:"2:35",
        artist: "Arctic Monkeys"
    }
]