import { useColorScheme } from '@/hooks/use-color-scheme';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isDark = colorScheme === 'dark';

  const handleLogin = () => {
    onSubmit(email, password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ThemedView style={styles.formContainer}>
        {/* Header */}
        <View style={styles.header}>
          <ThemedText type="title" style={styles.heading}>
            Welcome Back
          </ThemedText>
          <ThemedText style={styles.subheading}>
            Sign in to your account to continue
          </ThemedText>
        </View>

        {/* Email Input */}
        <View style={styles.inputGroup}>
          <ThemedText style={styles.label}>Email</ThemedText>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: isDark ? '#444' : '#ddd',
                backgroundColor: isDark ? '#1a1a1a' : '#f9f9f9',
                color: isDark ? '#fff' : '#000',
              },
            ]}
            placeholder="you@example.com"
            placeholderTextColor={isDark ? '#999' : '#ccc'}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputGroup}>
          <View style={styles.labelRow}>
            <ThemedText style={styles.label}>Password</ThemedText>
            <TouchableOpacity>
              <ThemedText style={styles.forgotLink}>Forgot?</ThemedText>
            </TouchableOpacity>
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[
                styles.passwordInput,
                {
                  borderColor: isDark ? '#444' : '#ddd',
                  backgroundColor: isDark ? '#1a1a1a' : '#f9f9f9',
                  color: isDark ? '#fff' : '#000',
                },
              ]}
              placeholder="Enter your password"
              placeholderTextColor={isDark ? '#999' : '#ccc'}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <ThemedText>{showPassword ? '👁️' : '👁️‍🗨️'}</ThemedText>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity
          style={[styles.signInButton, { marginTop: 24 }]}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <ThemedText style={styles.signInText}>Sign in</ThemedText>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={[styles.divider, { backgroundColor: isDark ? '#333' : '#e0e0e0' }]} />
          <ThemedText style={styles.dividerText}>or continue with</ThemedText>
          <View style={[styles.divider, { backgroundColor: isDark ? '#333' : '#e0e0e0' }]} />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={[styles.socialButton, { borderColor: isDark ? '#444' : '#ddd' }]}>
            <ThemedText style={styles.socialButtonText}>G</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { borderColor: isDark ? '#444' : '#ddd' }]}>
            <ThemedText style={styles.socialButtonText}>f</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { borderColor: isDark ? '#444' : '#ddd' }]}>
            <ThemedText style={styles.socialButtonText}>⌘</ThemedText>
          </TouchableOpacity>
        </View>

        {/* Sign Up Link */}
        <View style={styles.signupContainer}>
          <ThemedText style={styles.signupText}>Don't have an account? </ThemedText>
          <TouchableOpacity>
            <ThemedText style={styles.signupLink}>Sign up</ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    marginBottom: 28,
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 14,
    opacity: 0.6,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  forgotLink: {
    fontSize: 12,
    color: '#0066cc',
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
  },
  passwordInput: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
  },
  eyeButton: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  signInButton: {
    backgroundColor: '#000',
    borderRadius: 6,
    paddingVertical: 11,
    alignItems: 'center',
  },
  signInText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    paddingHorizontal: 12,
    fontSize: 12,
    opacity: 0.5,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  socialButton: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    fontSize: 13,
    opacity: 0.6,
  },
  signupLink: {
    fontSize: 13,
    color: '#0066cc',
    fontWeight: '600',
  },
});
