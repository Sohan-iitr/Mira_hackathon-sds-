from gtts import gTTS
from pydub import AudioSegment
from pydub.utils import which
from pydub.playback import play
import os
import tempfile

# Set the path for ffmpeg and ffprobe
AudioSegment.ffmpeg = r"C:\\Users\\user\\Downloads\\ffmpeg-master-latest-win64-gpl-shared\\ffmpeg-master-latest-win64-gpl-shared\\bin\\ffmpeg.exe"
AudioSegment.ffprobe = r"C:\\Users\\user\\Downloads\\ffmpeg-master-latest-win64-gpl-shared\\ffmpeg-master-latest-win64-gpl-shared\\bin\\ffprobe.exe"

def narrate_story(input_text):
    """
    Converts text to speech, plays the audio, and cleans up temporary files.
    """
    temp_path = None
    try:
        # Generate audio using gTTS
        tts = gTTS(text=input_text, lang='en', slow=False)
        print("tts done")

        # Set a custom temporary directory
        custom_temp_dir = "D:\\Codeforces\\Temp"
        if not os.path.exists(custom_temp_dir):
            os.makedirs(custom_temp_dir)

        # Use this directory for temporary files and save as .wav directly
        with tempfile.NamedTemporaryFile(delete=False, suffix=".wav", dir=custom_temp_dir) as temp_audio_file:
            temp_path = temp_audio_file.name
            tts.save(temp_path)
            print(f"Audio saved at {temp_path}")

        # Play the audio
        print("Playing the story...")
        print("temp path")
        print(temp_path)
        print(which("ffmpeg"))
        print(AudioSegment.ffmpeg)

        audio = AudioSegment.from_wav(temp_path)
        play(audio)

        # Explicitly delete the file after playback
        del audio  # Ensure the AudioSegment object is released

    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage
story_text = """
Once upon a time, in a small village surrounded by lush green hills, there lived a curious child named Maya.
She loved exploring the forest and learning about nature. One day, she found a mysterious glowing flower that changed her life forever.
"""
narrate_story(story_text)
