"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, BookOpen, Music, Heart } from "lucide-react";

export default function InspirationPage() {
  const [prayerRequest, setPrayerRequest] = useState("");

  return (
    <div className="min-h-screen w-full bg-yellow-50 py-10 px-4 md:px-10 flex items-center justify-center">
      <div className="w-full max-w-3xl space-y-16">
        {/* Verse of the Week */}
        <motion.div
          className="text-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Sparkles className="mx-auto mb-2 h-8 w-8 text-yellow-600" />
          <p className="pt-16 ">
            VERSE <span className="text-blue-700 font-medium">OF THE WEEK</span>
          </p>
          <p className="mt-2 text-lg italic">
            “Those who hope in the Lord will renew their strength.” — Isaiah
            40:31
          </p>
          <p className="mt-1 text-sm text-gray-600">
            Rest in God’s promise of renewal and courage this week.
          </p>
        </motion.div>

        {/* Devotional */}
        <motion.div
          className="flex justify-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-white shadow-md w-full max-w-2xl">
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center justify-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <p className="pt-16 ">
                  WEEKLY{" "}
                  <span className="text-blue-700 font-medium">DEVOTION</span>
                </p>
              </div>
              <p className="text-gray-700 text-base text-center">
                When life feels overwhelming, pause and remind yourself that God
                is with you. His presence brings peace that passes all
                understanding. Trust Him.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Worship Playlist */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="w-full max-w-2xl space-y-6 text-center">
            <div className="mb-6">
              <div className="flex justify-center items-center gap-2">
                <Music className="h-6 w-6 text-purple-600" />
                <h3 className="text-2xl font-bold tracking-wide">
                  WORSHIP <span className="text-blue-700">PLAYLIST</span>
                </h3>
              </div>
              <p className="mt-2 text-gray-600 text-sm">
                Listen and reflect with this week's featured worship song and
                testimony.
              </p>
            </div>

            {/* Song of the Week */}
            <div>
              <h4 className="text-lg font-semibold">Song of the Week</h4>
              <p className="text-gray-700 italic">"Way Maker" — Sinach</p>
              <p className="text-sm text-gray-600 mt-2">
                This song reminds us that even in our darkest moments, God is
                working behind the scenes.
              </p>
            </div>

            {/* YouTube Embed */}
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                className="w-full h-64 rounded-md shadow"
                src="https://www.youtube.com/embed/sAzytrfqjDU?si=Cvap7mlYETQAuXqM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Testimony */}
            <div className="text-sm text-gray-700">
              <p>
                "While going through a tough time, I heard this song during a
                service and felt peace wash over me. It reminded me that God
                never leaves us." — Jane, Nairobi
              </p>
            </div>
          </div>
        </motion.div>

        {/* Prayer Request Form */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-full max-w-2xl">
            <div className="flex items-center gap-2 mb-3 justify-center">
              <Heart className="h-5 w-5 text-red-600" />
              <p className="pt-16 ">
                SUBMIT{" "}
                <span className="text-blue-700 font-medium">
                  A PRAYER REQUEST
                </span>
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you for submitting your request. We'll pray for you!"
                );
                setPrayerRequest("");
              }}
              className="space-y-4"
            >
              <Textarea
                placeholder="Share your prayer need..."
                value={prayerRequest}
                onChange={(e) => setPrayerRequest(e.target.value)}
                className="w-full min-h-[100px]"
              />
              <Button
                type="submit"
                className="w-full shadow-[0_4px_10px_rgba(255,255,255,0.6)] hover:bg-blue-600 transition duration-300"
              >
                Send Prayer
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
