import React, { useContext } from 'react'
import { assets} from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

function Player() {
    const {seekBg, seekBar, play, pause, playStatus, track, time, previous, next, seekSong, volume, handleVolumeChange} = useContext(PlayerContext)

    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12' src={track.image} alt="" />
                <div>
                    <p>{track.name}</p>
                    <p>{track.artist}</p>
                </div>
            </div>
            
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                    <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                    {playStatus
                    ? <img onClick={() => pause()} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                    : <img onClick={() => play()} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                    }  
                    <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
                </div>
                <div className='flex items-center gap-5'>
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div onClick={seekSong} ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                    </div>              
                    <p>
                        {
                            time.totalTime.minute && time.totalTime.second ? `${time.totalTime.minute}:${time.totalTime.second}`: '0:0'
                        }
                    </p>
                </div>
            </div>

            <div className='hidden lg:flex items-center gap-2 opcaity-75'>
                <img className='w-4' src={assets.play_icon} alt="" />
                <img className='w-4' src={assets.mic_icon} alt="" />
                <img className='w-4' src={assets.queue_icon} alt="" />
                <img className='w-4' src={assets.speaker_icon} alt="" />
                <img className='w-4' src={assets.volume_icon} alt="" />
                <div className='flex items-center'>
                    <input className='w-20 h-1 appearance-none bg-gray rounded-full cursor-pointer focus:outline-none"'
                    style={{
                        background: `linear-gradient(to right, #1db954 ${volume}%, #535353 ${volume}%)`,
                    }}
                    value={volume}
                    onChange={handleVolumeChange}
                    type="range" min={0} max={100} />
                </div>
                <img className='w-4' src={assets.mini_player_icon} alt="" />
                <img className='w-4' src={assets.zoom_icon} alt="" />
            </div>
        </div>
    )
}

export default Player
