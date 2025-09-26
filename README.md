# ForaFix

A modern Flutter-based mobile application utilizing the latest mobile development technologies and tools for building responsive cross-platform applications.

## 📋 Prerequisites

- Flutter SDK (^3.29.2)
- Dart SDK
- Android Studio / VS Code with Flutter extensions
- Android SDK / Xcode (for iOS development)

## 🛠️ Installation

1. Install dependencies:
```bash
flutter pub get
```

2. Run the application:
```bash
flutter run
```

## 📁 Project Structure

```
flutter_app/
├── android/            # Android-specific configuration
├── ios/                # iOS-specific configuration
├── lib/
│   ├── core/           # Core utilities and services

# ForaFix

A modern Flutter-based home service delivery app, designed for seamless booking, tracking, and management of home services. ForaFix leverages the latest mobile development technologies to deliver a responsive, cross-platform experience.

## 📋 Prerequisites

- Flutter SDK (^3.29.2)
- Dart SDK
- Android Studio or VS Code with Flutter extensions
- Android SDK (for Android) / Xcode (for iOS)

## 🛠️ Installation

1. Install dependencies:
   ```bash
   flutter pub get
   ```

2. Run the application:
   ```bash
   flutter run
   ```

## 📁 Project Structure

```
forafixmobile/
├── android/            # Android configuration
├── ios/                # iOS configuration
├── lib/
│   ├── core/           # Core utilities and exports
│   ├── presentation/   # UI screens and widgets
│   ├── routes/         # App routing
│   ├── theme/          # Theme configuration
│   ├── widgets/        # Reusable UI components
│   └── main.dart       # App entry point
├── assets/             # Images, fonts, etc.
├── pubspec.yaml        # Dependencies and config
└── README.md           # Documentation
```

## 🧩 Navigation & Routing

To add or update routes, edit `lib/routes/app_routes.dart`:

```dart
class AppRoutes {
  static const String initial = '/';
  static const String dashboard = '/dashboard';
  static const String booking = '/service-booking';
  // Add more routes as needed

  static Map<String, WidgetBuilder> routes = {
    initial: (context) => const SplashScreen(),
    dashboard: (context) => const DashboardScreen(),
    booking: (context) => const BookingScreen(),
    // ...
  };
}
```

## 🎨 Theming

ForaFix supports light and dark themes for a consistent look:

```dart
ThemeData theme = Theme.of(context);
Color primaryColor = theme.colorScheme.primary;
```

Features:
- Light/dark color schemes
- Custom typography
- Button/input/card/dialog themes

## 📱 Responsive Design

Built with the Sizer package for adaptive layouts:

```dart
Container(
  width: 50.w, // 50% of screen width
  height: 20.h, // 20% of screen height
  child: Text('Responsive Container'),
)
```

## � Key Features

- **Service Booking:** Book home services (plumbing, cleaning, etc.) with a few taps.
- **Real-Time Tracking:** Track service providers on a map.
- **Chat:** Communicate with service providers in-app.
- **Photo Upload:** Document service progress with photos.
- **Profile & History:** Manage your profile and view past bookings.
- **Notifications:** Get updates on service status.

## 📦 Deployment

Build for production:

```bash
# Android
flutter build apk --release

# iOS (on Mac)
flutter build ios --release

# Windows Desktop
flutter build windows --release
```

---

ForaFix makes home service delivery simple, transparent, and reliable. For questions or contributions, see the issues section or contact the maintainer.
