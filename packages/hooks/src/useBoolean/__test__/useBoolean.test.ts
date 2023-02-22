import { renderHook } from '@testing-library/react';

import useBoolean from '../useBoolean';

describe('useBoolean', () => {
  it('initialValue is False', () => {
    const { result } = renderHook(() => useBoolean());
    expect(result.current[0]).toBe(false);
  });
});
