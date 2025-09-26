import 'package:flutter/material.dart';

class AppRoutes {
  // Route constants
  static const String initial = '/';
  static const String splash = '/splash';

  // Routes map
  static Map<String, WidgetBuilder> get routes {
    return {
      initial: (context) => const SplashScreen(),
      splash: (context) => const SplashScreen(),
    };
  }
}

// Temporary SplashScreen widget until you create the actual screen
class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.primary,
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            FlutterLogo(size: 100),
            SizedBox(height: 20),
            Text(
              'ForaFix',
              style: TextStyle(
                fontSize: 32,
                fontWeight: FontWeight.bold,
                color: Colors.white,
              ),
            ),
            SizedBox(height: 10),
            Text(
              'Service Pro',
              style: TextStyle(
                fontSize: 16,
                color: Colors.white70,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
