
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bell, MapPin, Route, Car, Shield, Activity } from 'lucide-react';

const SoftwareFeatures = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Software Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="text-blue-900" />
                Real-time Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>View locations of all vehicles simultaneously on the map with real-time updates and status information.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Route className="text-blue-900" />
                Route Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>View and manage routes of multiple vehicles simultaneously with deviation alerts and monitoring.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="text-blue-900" />
                Smart Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get instant alerts for geo-fence enter/exit, ignition status, over-speeding, and unauthorized vehicle use.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="text-blue-900" />
                Vehicle Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Monitor ignition status, AC usage, temperature, fuel levels, and door status in real-time.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="text-blue-900" />
                Security Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Remote immobilization, wire cut alerts, and tampering detection for enhanced vehicle security.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="text-blue-900" />
                Reporting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Comprehensive reporting for events, daily activities, position tracking, and ignition status.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SoftwareFeatures;
