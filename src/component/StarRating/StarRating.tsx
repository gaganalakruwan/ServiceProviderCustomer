import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme/index';

interface StarRatingProps {
    rating: number;
    reviews: number;
    size: 'sm' | 'md' | 'lg';
    interactive: boolean;
    onRate: (val: number) => void;
    showLabel: boolean;
    style: object;
}

const SIZES = {
  sm: { star: 11, text: 10 },
  md: { star: 16, text: 12 },
  lg: { star: 36, text: 14 },
};

const RATING_LABELS = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

export default function StarRating({
  rating = 0,
  reviews,
  size = 'sm',
  interactive = false,
  onRate,
  showLabel = true,
  style,
} : StarRatingProps) {
  const [hovered, setHovered] = useState(0);
  const { star, text } = SIZES[size] ?? SIZES.sm;
  const displayRating = interactive ? (hovered || rating) : rating;

  const handlePress = (val) => {
    setHovered(0);
    onRate?.(val);
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.starsRow}>
        {[1, 2, 3, 4, 5].map((i) => {
          const filled = i <= Math.round(displayRating);
          const StarEl = interactive ? TouchableOpacity : View;
          return (
            <StarEl
              key={i}
              onPress={() => handlePress(i)}
              onPressIn={() => setHovered(i)}
              style={{ padding: interactive ? 3 : 1 }}
            >
              <Text style={[
                styles.star,
                { fontSize: star, color: filled ? COLORS.warning : COLORS.gray200 },
              ]}>
                ★
              </Text>
            </StarEl>
          );
        })}
      </View>

      {showLabel && (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          {!interactive && rating > 0 && (
            <Text style={[styles.label, { fontSize: text, color: COLORS.gray600 }]}>
              {rating.toFixed(1)}
            </Text>
          )}
          {reviews !== undefined && !interactive && (
            <Text style={[styles.label, { fontSize: text, color: COLORS.gray400 }]}>
              ({reviews})
            </Text>
          )}
          {interactive && hovered > 0 && (
            <Text style={[styles.label, { fontSize: text, color: COLORS.primary }]}>
              {RATING_LABELS[hovered]}
            </Text>
          )}
          {interactive && !hovered && rating > 0 && (
            <Text style={[styles.label, { fontSize: text, color: COLORS.primary }]}>
              {RATING_LABELS[Math.round(rating)]}
            </Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {},
  label: { 
    ...FONTS.medium
 },
});