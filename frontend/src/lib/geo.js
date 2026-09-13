/** Earth-distance helpers used for nearby-hospital ranking. */

export function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

export function withDistanceFrom(facilities, lat, lng) {
  return facilities
    .map((f) => ({
      ...f,
      computedDistance:
        f.lat != null && f.lng != null ? calculateDistance(lat, lng, f.lat, f.lng) : Number.POSITIVE_INFINITY,
    }))
    .sort((a, b) => a.computedDistance - b.computedDistance);
}

/**
 * Browser geolocation uses GPS, Wi-Fi, and mobile cell-tower triangulation
 * when the user allows it. Cell-tower IDs are not readable from the web.
 */
export function detectUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Location is not supported on this device.'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        resolve({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        }),
      (err) => reject(err),
      { timeout: 12000, enableHighAccuracy: true, maximumAge: 60000 }
    );
  });
}
