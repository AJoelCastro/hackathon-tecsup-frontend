import SafeAreaBackground from '@/components/safe-area-background';
import { ThemedView } from '@/components/themed-view';
import {
  AudioModule,
  RecordingPresets,
  setAudioModeAsync,
  useAudioPlayer,
  useAudioRecorder,
  useAudioRecorderState,
} from 'expo-audio';
import React, { useEffect } from 'react';
import { Alert, Button } from 'react-native';

const VoiceScreen = () => {

  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const recorderState = useAudioRecorderState(audioRecorder);
  const player = useAudioPlayer(audioRecorder.uri);

  const record = async () => {
    await audioRecorder.prepareToRecordAsync();
    audioRecorder.record();
    console.log('Recording started', audioRecorder);
  };

  const stopRecording = async () => {
    // The recording will be available on `audioRecorder.uri`.
    await audioRecorder.stop();
    console.log('Recording stopped', audioRecorder);
    
  };

  useEffect(() => {
    (async () => {
      const status = await AudioModule.requestRecordingPermissionsAsync();
      if (!status.granted) {
        Alert.alert('Permission to access microphone was denied');
      }

      setAudioModeAsync({
        playsInSilentMode: true,
        allowsRecording: true,
      });
    })();
  }, []);
  return (
    <SafeAreaBackground>
      <ThemedView>
        <Button
          title={recorderState.isRecording ? 'Stop Recording' : 'Start Recording'}
          onPress={recorderState.isRecording ? stopRecording : record}
        />
        <Button title="Play Sound" onPress={() => {
          console.log("player",player);
          player.play()}} />
        <Button
          title="Replay Sound"
          onPress={() => {
            player.seekTo(0);
            player.play();
          }}
        />
      </ThemedView>
    </SafeAreaBackground>
  )
}

export default VoiceScreen