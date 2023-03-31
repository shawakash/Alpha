import React from 'react';
import ListCard from './ListCard';

function SideBar() {
    return (
        <div className="sideBar flex flex-col gap-y-10 sticky top-0">
            <div className="news flex flex-col gap-y-6 bg-transparent backdrop-blur-lg w-fit py-4 rounded-lg border-slate-500 border-[0.25px] px-10">
                <div className="heading text-xl text-slate-50 font-rob font-semibold tracking-widest">
                    Trending Stories
                </div>
                <div className="news flex flex-col gap-y-2">
                    <ListCard />
                    <ListCard />
                    <ListCard />
                </div>
            </div>
            <div className="friends flex flex-col gap-y-6 bg-transparent backdrop-blur-lg w-fit py-4 rounded-lg border-slate-500 border-[0.25px] px-10">
                <div className="heading text-xl text-slate-50 font-rob font-semibold tracking-widest">
                    My Friends
                </div>
                <div className="news flex flex-col gap-y-2">
                    <ListCard />
                    <ListCard />
                    <ListCard />
                </div>
            </div>
            <div className="random flex flex-col gap-y-6 bg-transparent backdrop-blur-lg w-fit py-4 rounded-lg border-slate-500 border-[0.25px] px-10">
                <div className="heading text-xl text-slate-50 font-rob font-semibold tracking-widest">
                    Suggested
                </div>
                <div className="news flex flex-col gap-y-2">
                    <ListCard />
                    <ListCard />
                    <ListCard />
                </div>
            </div>
        </div>

    );
}

export default SideBar;