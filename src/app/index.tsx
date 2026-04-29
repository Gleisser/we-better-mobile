import { View, Text } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background-primary">
      <View className="p-6 bg-surface rounded-2xl shadow-sm border border-border">
        <Text className="text-3xl font-poppinsBold text-brand-violet mb-2">
          WeBetter
        </Text>
        <Text className="text-base font-poppins text-text-secondary mb-4">
          Construindo hábitos, juntos.
        </Text>
        <View className="px-4 py-2 bg-accent-amber rounded-full self-start">
          <Text className="text-sm font-poppinsMedium text-text-primary">
            Começar
          </Text>
        </View>
      </View>
    </View>
  );
}
